import icon from '../../images/sprite.svg';

import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import EditColumnModal from 'components/Modals/ColumnModal/EditColumnModal';
import {
  ColumnName,
  Conteiner,
  Btn,
  IconEdit,
  Wrap,
} from './HeaderColumn.styled';
import { useDispatch } from 'react-redux';
import { removeColumn } from 'redux/content/content-operations';

const HeaderColumn = ({ boardId, title, columnId }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const editColumnModal = () => {
    openModal({
      children: (
        <EditColumnModal
          boardId={boardId}
          columnId={columnId}
          titleColumn={title}
          title={'Edit column'}
          butName={'Edit'}
          handleClose={closeModal}
        />
      ),
    });
  };

  const dispatch = useDispatch();
  const handleRemove = () => {
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
