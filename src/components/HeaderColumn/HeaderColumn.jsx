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

const HeaderColumn = ({ title, id }) => {
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

  return (
    <Conteiner>
      <ColumnName>{title}</ColumnName>
      <Wrap>
        <Btn onClick={editColumnModal}>
          <IconEdit>
            <use href={icon + '#icon-pencil'}></use>
          </IconEdit>
        </Btn>
        <Btn>
          <IconEdit>
            <use href={icon + '#icon-trash'}></use>
          </IconEdit>
        </Btn>
      </Wrap>
    </Conteiner>
  );
};
export default HeaderColumn;
