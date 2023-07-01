import icon from '../../../images/sprite.svg';
import {
  Form,
  Field,
  Button,
  Wrap,
  Title,
  CloseIcon,
  CloseBtn,
  IconPlus,
} from './ColumnModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentBoard } from 'redux/content/content-selectors';
import { addColumns } from 'redux/content/content-operations';
const ColumnModal = ({ handleClose, title, butName }) => {
  const board = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const handleSumbit = evt => {
    evt.preventDefault();
    const value = evt.currentTarget.elements.title.value;
    console.log(board, value);
    const id = board._id;
    dispatch(addColumns({ id, value }));
  };
  return (
    <Wrap>
      <Form onSubmit={handleSumbit}>
        <Title>{title}</Title>
        <Field id="title" type="text" name="title" placeholder="Title" />
        <Button type="submit">
          <IconPlus>
            <use href={icon + '#icon-plus'}></use>
          </IconPlus>
          {butName}
        </Button>
        <CloseBtn onClick={handleClose}>
          <CloseIcon>
            <use href={icon + '#icon-close'}></use>
          </CloseIcon>
        </CloseBtn>
      </Form>
    </Wrap>
  );
};

export default ColumnModal;