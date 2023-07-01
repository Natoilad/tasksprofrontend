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
import { useDispatch } from 'react-redux';
// useSelector
// import { selectCurrentBoard } from 'redux/content/content-selectors';
import { removeColumn } from 'redux/content/content-operations';

const HeaderColumn = ({ boardId, title, columnId }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
        <Btn onClick={handleOpen}>
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
