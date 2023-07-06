import { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { updateColumn } from 'redux/content/content-operations';
const EditColumnModal = ({
  boardId,
  columnId,
  handleClose,
  title,
  butName,
  titleColumn,
}) => {
  const [inputValue, setInputValue] = useState(titleColumn);
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const dispatch = useDispatch();
  const handleSumbit = evt => {
    evt.preventDefault();

    dispatch(updateColumn({ boardId, columnId, inputValue }));
    handleClose();
  };

  return (
    <Wrap>
      <Form onSubmit={handleSumbit} autoComplete="off">
        <Title>{title}</Title>
        <Field
          type="text"
          name="title"
          value={inputValue}
          onChange={handleInputChange}
        />
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

export default EditColumnModal;
