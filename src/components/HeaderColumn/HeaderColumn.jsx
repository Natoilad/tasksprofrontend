import icon from '../../images/sprite.svg';
import ContainerModal from 'components/Modals/ContainerModal';
import { useState } from 'react';
import ColumnModal from 'components/Modals/ColumnModal/ColumnModal';
import {
  ColumnName,
  Conteiner,
  Btn,
  IconEdit,
  Wrap,
} from './HeaderColumn.styled';

const HeaderColumn = ({ title, id }) => {
 const [open, setOpen] = useState(false);
 const handleClose = () => setOpen(false);
 const handleOpen = () => setOpen(true);

  return (
    <Conteiner>
      <ColumnName>{title}</ColumnName>
      <Wrap>
        <Btn onClick={handleOpen}>
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
      {open && (
        <ContainerModal
          handleClose={handleClose}
          open={open}
          component={
            <ColumnModal
              title={'Edit column'}
              butName={'Edit'}
              handleClose={handleClose}
            />
          }
        />
      )}
    </Conteiner>
  );
};
export default HeaderColumn;
