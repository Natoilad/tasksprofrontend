import { useSelector } from 'react-redux';
import {
  selectContent,
  // selectCurrentBoard,
} from 'redux/content/content-selectors';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';

import BoardIsNotYet from 'components/BoardIsNotYet/BoardIsNotYet';

// import { Conteiner } from 'components/Board/Board.styled';
const ScreensPage = () => {
  // const currentBoard = useSelector(selectCurrentBoard);
  const boards = useSelector(selectContent);

  const navigate = useNavigate();
  const { boardName } = useParams();
  const board = boards.find(board => board.title === boardName);
  if (!boardName && boards.length > 0) {
    navigate(`/home/${boards[0].title}`, { replace: true });
  }
  return (
    // <Conteiner>
    <>
      {boards.length === 0 ? (
        <BoardIsNotYet />
      ) : (
        <>
          <HeaderDashboard title={boardName} />
          <MainDashboard boardId={board._id || ''} columns={board.columns} />
        </>
      )}
    </>

    //  </Conteiner>
  );
};
export default ScreensPage;
