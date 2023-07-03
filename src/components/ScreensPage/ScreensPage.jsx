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
import { useEffect } from 'react';

// import { Conteiner } from 'components/Board/Board.styled';
const ScreensPage = () => {
  // const currentBoard = useSelector(selectCurrentBoard);
  const boards = useSelector(selectContent);
  const { boardName } = useParams();

  const navigate = useNavigate();
  const board = boards.find(board => board.title === boardName);
  // if (!boardName && boards.length > 0) {
  //   navigate(`/home/${boards[0].title}`, { replace: true });
  // }
  // if (boards.length === 0 && boardName) {
  //   navigate(`/home`, { replace: true });
  // }

  useEffect(() => {
    if (!boardName && boards.length > 0) {
      navigate(`/home/${boards[0].title}`, { replace: true });
    }
    if (boards.length === 0 && boardName) {
      navigate(`/home`, { replace: true });
    }
  }, [boardName, boards, navigate]);

  return (
    // <Conteiner>
    <div>
      <>
        {boards.length === 0 ? (
          <BoardIsNotYet />
        ) : (
          <>
            {board && (
              <>
                <HeaderDashboard title={boardName} />
                <MainDashboard board={board} columns={board.columns} />
              </>
            )}
          </>
        )}
      </>
    </div>
    // </Conteiner>
  );
};
export default ScreensPage;
