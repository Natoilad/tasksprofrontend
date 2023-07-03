import { useSelector } from 'react-redux';
import { selectContent } from 'redux/content/content-selectors';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';
import BoardIsNotYet from 'components/BoardIsNotYet/BoardIsNotYet';

import { useEffect } from 'react';

import { Container } from 'components/ScreensPage/SceensPage.styled';
// import backgrounds from '../../images/bgFolder/backgrounds.json';

// import { useState } from 'react';

const ScreensPage = () => {
  const boards = useSelector(selectContent);
  const navigate = useNavigate();
  const { boardName } = useParams();
  // const [idBackground, setIdBackground] = useState();

  const board = boards.find(board => board.title === boardName);

  // console.log(boards.map(board => console.log(board.background)));

  // const trueBackground = backgrounds.find(
  //   background => background._id === board.background[0]
  // );

  // console.log(trueBackground);

  useEffect(() => {
    if (!boardName && boards.length > 0) {
      navigate(`/home/${boards[0].title}`, { replace: true });
    }
    if (boards.length === 0 && boardName) {
      navigate(`/home`, { replace: true });
    }
  }, [boardName, boards, navigate]);

  // const findBgId = async () => {
  //   if (!board.background) return;
  //   const trueBackground = await backgrounds.find(
  //     background => background._id === board.background[0]
  //   );
  //   console.log(trueBackground);
  //   return trueBackground;
  // };

  return (
    <Container>
      {/* <div> */}
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
      {/* </div> */}
    </Container>
  );
};
export default ScreensPage;
