import { authLogout } from 'redux/auth/auth-operations';
import icon from '../../../images/sprite.svg';
import { LogOutBox, LogOutIcon } from './LogOutBtn.styled';
import { useDispatch } from 'react-redux';

export const LogOutBtn = () => {
  const dispatch = useDispatch();
  return (
    <LogOutBox onClick={() => dispatch(authLogout())}>
      <LogOutIcon>
        <use href={icon + '#icon-logout'}></use>
      </LogOutIcon>
      Log out
    </LogOutBox>
  );
};
