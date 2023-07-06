import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { removeBoard } from 'redux/content/content-operations';
import icon from '../../../images/sprite.svg';
import { Box, BoardItem, BoardBtnBox, BoardBtn } from './BoardListItem.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../../contexts/index';
import EditBoard from 'components/Modals/EditBoardModal/EditBoardModal';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDelete = () => {
    if (board.title === boardName) {
      navigate(`/home`, { replace: true });
    }

    dispatch(removeBoard(board._id));
  };
  return (
    <Box>
      <BoardItem to={`/home/${board.title}`}>
        <svg className="main">
          <use href={icon + `#${board.icon}`}></use>
        </svg>
        <p>{board.title}</p>
      </BoardItem>
      <BoardBtnBox>
        <BoardBtn type="button" onClick={editBoardModal}>
          <svg className="btn">
            <use href={icon + '#icon-pencil'}></use>
          </svg>
        </BoardBtn>
        <BoardBtn type="button" onClick={onDelete}>
          <svg className="btn">
            <use href={icon + '#icon-trash'}></use>
          </svg>
        </BoardBtn>
      </BoardBtnBox>
    </Box>
  );
};
