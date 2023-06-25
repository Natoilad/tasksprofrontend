import { useState, useRef, useEffect } from 'react';

import {
  HeaderComponent,
  HeaderBox,
  UserBox,
  ThemeDropdown,
  AvatarBox,
  UserInfoBox,
} from './Header.styled';

import icon from '../../images/sprite.svg';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const themeListRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = event => {
    if (themeListRef.current && !themeListRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <HeaderComponent>
      <HeaderBox className="container">
        <svg width="24" height="24">
          <use href={icon + '#icon-burger-menu'}></use>
        </svg>
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
                  <button>Light</button>
                </li>
                <li>
                  <button>Dark</button>
                </li>
                <li>
                  <button>Violet</button>
                </li>
              </ul>
            ) : null}
          </ThemeDropdown>
          <UserInfoBox>
            <p>Ivetta</p>
            <AvatarBox>
              <svg width="32" height="32">
                <use href={icon + '#icon-user-avatar'}></use>
              </svg>
            </AvatarBox>
          </UserInfoBox>
        </UserBox>
      </HeaderBox>
    </HeaderComponent>
  );
};
