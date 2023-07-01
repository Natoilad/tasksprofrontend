import { useState, useRef, useEffect } from 'react';

import {
  HeaderComponent,
  HeaderBox,
  UserBox,
  ThemeDropdown,
  AvatarBox,
  UserInfoBox,
  BurgerMenuBtn,
} from './Header.styled';

import icon from '../../images/sprite.svg';
import { EditProfileModal } from 'components/Modals/EditProfileModal/EditProfileModal';
import ContainerModal from 'components/Modals/ContainerModal';
import { useAuth } from 'hooks/authHooks';
import { updateTheme } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const handleCloseModalEdit = () => setOpenModalEdit(false);
  const handleOpenModalEdit = () => setOpenModalEdit(true);
  const themeListRef = useRef(null);

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
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <>
      <HeaderComponent>
        <HeaderBox>
          <BurgerMenuBtn>
            <svg width="24" height="24">
              <use href={icon + '#icon-burger-menu'}></use>
            </svg>
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
                <svg width="32" height="32">
                  <use href={icon + '#icon-user-avatar'}></use>
                </svg>
              </AvatarBox>
            </UserInfoBox>
          </UserBox>
        </HeaderBox>
      </HeaderComponent>
      {openModalEdit && (
        <ContainerModal
          handleClose={handleCloseModalEdit}
          open={openModalEdit}
          component={<EditProfileModal handleClose={handleCloseModalEdit} />}
        />
      )}
    </>
  );
};
