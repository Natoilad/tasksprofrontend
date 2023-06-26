import icon from '../../../images/sprite.svg';
import { LogOutBox, LogOutIcon } from './LogOutBtn.styled';

export const LogOutBtn = () => {
  return (
    <LogOutBox>
      <LogOutIcon>
        <use href={icon + '#icon-logout'}></use>
      </LogOutIcon>
      Log out
    </LogOutBox>
  );
};
