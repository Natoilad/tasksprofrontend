import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';
import BoardIsNotYet from 'components/BoardIsNotYet/BoardIsNotYet';
import { useState } from 'react';
import { authLogout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

// import { Conteiner } from 'components/Board/Board.styled';
const Board = () => {
  const [isItBord, setIsItBord] = useState(true);
  const dispatch = useDispatch();

  return (
    // <Conteiner>
    <>
      <HeaderDashboard title="Name of board" />
      {isItBord ? <MainDashboard /> : <BoardIsNotYet />}
      <button type="button" onClick={() => dispatch(authLogout())}>
        <b>Logout</b>
      </button>
    </>

    //  </Conteiner>
  );
};
export default Board;
