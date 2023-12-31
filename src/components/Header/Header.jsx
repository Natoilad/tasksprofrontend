import { useState, useRef, useEffect, useContext } from 'react';

import {
  HeaderComponent,
  HeaderBox,
  UserBox,
  ThemeDropdown,
  AvatarBox,
  UserInfoBox,
  BurgerMenuBtn,
  BurgerSvg,
} from './Header.styled';

import icon from '../../images/sprite.svg';
import { EditProfileModal } from 'components/Modals/EditProfileModal/EditProfileModal';
import { ModalContext } from '../../contexts';
import { useAuth } from 'hooks/authHooks';
import { updateTheme } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export const Header = ({ toggleDrawer }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { openModal, closeModal } = useContext(ModalContext);
  const themeListRef = useRef(null);
  const anchor = 'left';

  const changeRootTheme = theme => {
    switch (theme) {
      case 'dark':
        document.documentElement.style.setProperty('--accentColor', '#bedbb0');
        document.documentElement.style.setProperty('--bgColor', '#121212');
        document.documentElement.style.setProperty('--textColor', '#fff');
        break;
      case 'light':
        document.documentElement.style.setProperty('--accentColor', '#bedbb0');
        document.documentElement.style.setProperty('--bgColor', '#FFF');
        document.documentElement.style.setProperty('--textColor', '#000');
        break;
      case 'violet':
        document.documentElement.style.setProperty('--accentColor', '#5255BC');
        document.documentElement.style.setProperty('--bgColor', '#fff');
        document.documentElement.style.setProperty('--textColor', '#000');
        break;
      default:
        return;
    }
  };

  const { user } = useAuth();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = event => {
    if (themeListRef.current && !themeListRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const HandleThemeChange = theme => {
    dispatch(updateTheme(theme));
    changeRootTheme(theme);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleOpenModalEdit = () => {
    openModal({
      children: <EditProfileModal handleClose={closeModal} />,
    });
  };

  return (
    <>
      <HeaderComponent>
        <HeaderBox>
          <BurgerMenuBtn type="button" onClick={toggleDrawer(anchor, true)}>
            <BurgerSvg width="24" height="24">
              <use href={icon + '#icon-burger-menu'}></use>
            </BurgerSvg>
          </BurgerMenuBtn>
          <UserBox>
            <ThemeDropdown ref={themeListRef}>
              <button onClick={handleOpen}>
                Theme
                <svg width="16" height="16">
                  <use href={icon + '#icon-chevron-down'}></use>
                </svg>
              </button>
              {open ? (
                <ul>
                  <li>
                    <button
                      className={`${user.theme === 'light' ? 'active' : ''}`}
                      onClick={() => HandleThemeChange('light')}
                    >
                      Light
                    </button>
                  </li>
                  <li>
                    <button
                      className={`${user.theme === 'dark' ? 'active' : ''}`}
                      onClick={() => HandleThemeChange('dark')}
                    >
                      Dark
                    </button>
                  </li>
                  <li>
                    <button
                      className={`${user.theme === 'violet' ? 'active' : ''}`}
                      onClick={() => HandleThemeChange('violet')}
                    >
                      Violet
                    </button>
                  </li>
                </ul>
              ) : null}
            </ThemeDropdown>
            <UserInfoBox onClick={handleOpenModalEdit}>
              <p>{user.name}</p>
              <AvatarBox>
                {user.avatarURL ? (
                  <img src={user.avatarURL} alt="User avatar" />
                ) : (
                  <svg width="32" height="32">
                    <use href={icon + '#icon-user-avatar'}></use>
                  </svg>
                )}
              </AvatarBox>
            </UserInfoBox>
          </UserBox>
        </HeaderBox>
      </HeaderComponent>
    </>
  );
};
