import { useSelector } from 'react-redux';
import { selectContent } from 'redux/content/content-selectors';
import { BoardListItem } from 'components/Sidebar/BoardLIstItem/BoardListItem';
import { List } from './BoardList.styled';

export const BoardList = () => {
  const boards = useSelector(selectContent);

  return (
    <List>
      {boards.map(board => {
        return (
          <li key={board._id}>
            <BoardListItem board={board} />
          </li>
        );
      })}
    </List>
  );
};
