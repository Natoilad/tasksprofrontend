import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { removeBoard } from 'redux/content/content-operations';
import icon from '../../../images/sprite.svg';
import {
  // BoardHero,
  BoardIcon,
  // BoarLink,
  BoardItem,
  BtnIcon,
  BoardBtnBox,
  BoardBtn,
} from './BoardListItem.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../../contexts/index';
import EditBoard from 'components/Modals/EditBoardModal/EditBoardModal';
// import { getBoardById } from 'redux/content/content-operations';
export const BoardListItem = ({ board }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const editBoardModal = () => {
    openModal({
      children: (
        <EditBoard
          title={'Edit card'}
          butName={'Create'}
          handleClose={closeModal}
          boardTitle={board.title}
          boardId={board._id}
          boardBgr={board.background[0]}
        />
      ),
    });
  };

  const { boardName } = useParams();
  // const handleSelectBoard = (evt) => {
  //   if (evt.currentTarget === evt.target) {
  //     return;
  //   };
  //   // dispatch(getBoardById(board._id));
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDelete = () => {
    if (board.title === boardName) {
      navigate(`/home`, { replace: true });
    }

    dispatch(removeBoard(board._id));
  };
  return (
    <>
      <BoardItem to={`/home/${board.title}`}>
        {/* <BoardHero> */}
        <BoardIcon>
          <use href={icon + `#${board.icon}`}></use>
        </BoardIcon>
        <p>{board.title}</p>
        {/* </BoardHero> */}
      </BoardItem>
      <BoardBtnBox>
        <BoardBtn type="button" onClick={editBoardModal}>
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
    </>
  );
};
