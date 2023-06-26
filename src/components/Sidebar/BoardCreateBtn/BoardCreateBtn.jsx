import icon from '../../../images/sprite.svg';
import {
  CreateBoardBox,
  CreateBoardIcon,
  TextBox,
} from './BoardCreateBtn.styled';

export const BoardCreateBtn = () => {
  return (
    <CreateBoardBox>
      <TextBox>
        <p>Create a</p>
        <p>new board</p>
      </TextBox>
      <CreateBoardIcon>
        <use href={icon + '#icon-plus'}></use>
      </CreateBoardIcon>
    </CreateBoardBox>
  );
};
