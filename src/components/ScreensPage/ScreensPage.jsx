import { useSelector } from 'react-redux';
import { selectContent } from 'redux/content/content-selectors';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';
import BoardIsNotYet from 'components/BoardIsNotYet/BoardIsNotYet';

import { useEffect } from 'react';

import { Container } from 'components/ScreensPage/SceensPage.styled';

const ScreensPage = () => {
  const boards = useSelector(selectContent);
  const navigate = useNavigate();
  const { boardName } = useParams();

  const board = boards.find(board => board.title === boardName);

  useEffect(() => {
    if (!boardName && boards.length > 0) {
      navigate(`/home/${boards[0].title}`, { replace: true });
    }
    if (boards.length === 0 && boardName) {
      navigate(`/home`, { replace: true });
    }
  }, [boardName, boards, navigate]);

  return (
    <>
      {boards.length === 0 ? (
        <BoardIsNotYet />
      ) : (
        <>
          {board && (
            <Container board={board}>
              <HeaderDashboard
                title={boardName}
                boardId={board._id}
                boardBgr={board.background[0]}
                boardTitle={board.title}
              />
              <MainDashboard board={board} columns={board.columns} />
            </Container>
          )}
        </>
      )}
    </>
  );
};
export default ScreensPage;
