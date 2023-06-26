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

const ColumnModal = ({ handleClose }) => {
  return (
    <Wrap>
      <Form>
        <Title>Add column</Title>
        <Field id="title" type="text" name="title" placeholder="Title" />
        <Button type="submit">
          <IconPlus>
            <use href={icon + '#icon-plus'}></use>
          </IconPlus>
          Add
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
