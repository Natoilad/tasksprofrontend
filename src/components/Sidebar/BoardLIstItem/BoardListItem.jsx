// import { PropTypes } from 'prop-types';
// import { useDispatch } from 'react-redux';
import { removeBoard } from 'redux/content/content-operations';
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
  const handleSelectBoard = () => {
    dispatch(getBoardById(board._id));
  };
  console.log(board._id);
  const dispatch = useDispatch();
  const onDelete = () => dispatch(removeBoard(board._id));
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
        <BoardBtn type="button" onClick={onDelete}>
          <BtnIcon>
            <use href={icon + '#icon-trash'}></use>
          </BtnIcon>
        </BoardBtn>
      </BoardBtnBox>
    </BoardItem>
  );
};
