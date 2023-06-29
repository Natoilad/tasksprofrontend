import { useSelector } from 'react-redux';
import { selectContent } from 'redux/content/content-selectors';
import { useParams } from 'react-router-dom';

import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';

import BoardIsNotYet from 'components/BoardIsNotYet/BoardIsNotYet';

// import { Conteiner } from 'components/Board/Board.styled';
const ScreensPage = () => {
  const boards = useSelector(selectContent);

  const { boardName } = useParams();

  // const columns = board.columns;

  return (
    // <Conteiner>
    <>
      {boards.length === 0 ? (
        <BoardIsNotYet />
      ) : (
        <>
          <HeaderDashboard title={boardName} />
          <MainDashboard />
        </>
      )}
      ;
    </>

    //  </Conteiner>
  );
};
export default ScreensPage;
