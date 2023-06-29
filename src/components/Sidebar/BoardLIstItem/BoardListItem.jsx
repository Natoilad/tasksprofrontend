// import { PropTypes } from 'prop-types';
// import { useDispatch } from 'react-redux';
import icon from '../../../images/sprite.svg';
import {
  BoardHero,
  BoardIcon,
  BoardItem,
  BtnIcon,
  BoardBtnBox,
  BoardBtn,
} from './BoardListItem.styled';

export const BoardListItem = ({ board }) => {
  return (
    <BoardItem to={`/home/${board.title}`}>
      <BoardHero>
        <BoardIcon>
          <use href={icon + `#${board.icon}`}></use>
        </BoardIcon>
        <p>{board.title}</p>
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
