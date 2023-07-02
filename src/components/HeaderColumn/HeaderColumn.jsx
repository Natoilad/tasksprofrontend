import icon from '../../images/sprite.svg';

import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import ColumnModal from 'components/Modals/ColumnModal/ColumnModal';
import {
  ColumnName,
  Conteiner,
  Btn,
  IconEdit,
  Wrap,
} from './HeaderColumn.styled';
import { useDispatch } from 'react-redux';
// useSelector
// import { selectCurrentBoard } from 'redux/content/content-selectors';
import { removeColumn } from 'redux/content/content-operations';

const HeaderColumn = ({ boardId, title, columnId }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const editColumnModal = () => {
    openModal({
      children: <ColumnModal
              title={'Edit column'}
              butName={'Edit'}
              handleClose={closeModal}
            />
    });
  }

  const dispatch = useDispatch();
  // const board = useSelector(selectCurrentBoard);
  const handleRemove = () => {
    // const boardId = board._id;
    console.log(columnId);
    dispatch(removeColumn({ boardId, columnId }));
  };

  return (
    <Conteiner>
      <ColumnName>{title}</ColumnName>
      <Wrap>
        <Btn onClick={editColumnModal}>
          <IconEdit>
            <use href={icon + '#icon-pencil'}></use>
          </IconEdit>
        </Btn>
        <Btn onClick={handleRemove}>
          <IconEdit>
            <use href={icon + '#icon-trash'}></use>
          </IconEdit>
        </Btn>
      </Wrap>
    </Conteiner>
  );
};
export default HeaderColumn;
