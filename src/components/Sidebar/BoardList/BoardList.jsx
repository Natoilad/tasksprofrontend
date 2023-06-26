import { BoardListItem } from 'components/Sidebar/BoardLIstItem/BoardListItem';
import { List } from './BoardList.styled';

export const BoardList = () => {
  return (
    <List>
      <li>
        <BoardListItem />
      </li>
      <li>
        <BoardListItem />
      </li>
    </List>
  );
};
