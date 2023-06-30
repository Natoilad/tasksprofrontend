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
import { useDispatch } from 'react-redux';
import { getBoardById } from 'redux/content/content-operations';
export const BoardListItem = ({ board }) => {
  const dispatch = useDispatch();
  const handleSelectBoard = () => {
    dispatch(getBoardById(board._id));
  };
  return (
    <BoardItem onClick={handleSelectBoard} to={`/home/${board.title}`}>
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
