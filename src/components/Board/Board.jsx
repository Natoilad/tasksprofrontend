import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';
// import BoardIsNotYet from 'components/BoardIsNotYet/BoardIsNotYet';
import { authLogout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { Conteiner } from 'components/Board/Board.styled';
const Board = () => {
  const dispatch = useDispatch();
  // const [isItBord, setIsItBord] = useState(true);
  return (
    // <Conteiner>
    <>
      <HeaderDashboard title="Name of board" />
      {/* {isItBord ? */}
      <MainDashboard />
      {/* // } */}
      <button type="button" onClick={() => dispatch(authLogout())}>
        <b>Logout</b>
      </button>
      ;
    </>

    //  </Conteiner>
  );
};
export default Board;
