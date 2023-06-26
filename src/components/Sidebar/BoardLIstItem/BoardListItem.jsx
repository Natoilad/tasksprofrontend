import icon from '../../../images/sprite.svg';
import {
  BoardHero,
  BoardIcon,
  BoardItem,
  BtnIcon,
  BoardBtnBox,
  BoardBtn,
} from './BoardListItem.styled';

export const BoardListItem = () => {
  return (
    <BoardItem>
      <BoardHero>
        <BoardIcon>
          <use href={icon + '#icon-puzzle-piece'}></use>
        </BoardIcon>
        <p>Project Example</p>
      </BoardHero>
      <BoardBtnBox>
        <BoardBtn>
          <BtnIcon>
            <use href={icon + '#icon-pencil'}></use>
          </BtnIcon>
        </BoardBtn>
        <BoardBtn>
          <BtnIcon>
            <use href={icon + '#icon-trash'}></use>
          </BtnIcon>
        </BoardBtn>
      </BoardBtnBox>
    </BoardItem>
  );
};
