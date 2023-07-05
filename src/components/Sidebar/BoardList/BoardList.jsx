import { useSelector } from 'react-redux';
import { selectContent } from 'redux/content/content-selectors';
import { BoardListItem } from 'components/Sidebar/BoardLIstItem/BoardListItem';

import { List, Li } from './BoardList.styled';
import { useParams } from 'react-router-dom';

export const BoardList = () => {
  const boards = useSelector(selectContent);
  const { boardName } = useParams();
  return (
    <List>
      {boards.map(board => {
        return (
          <Li
            className={board.title === boardName ? 'active' : ''}
            key={board._id}
          >
            <BoardListItem board={board} />
          </Li>
        );
      })}
    </List>
  );
};
