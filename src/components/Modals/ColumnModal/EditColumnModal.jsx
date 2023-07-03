import { useState } from 'react';
import icon from '../../../images/sprite.svg';
// import { Formik } from 'formik';

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
// useSelector
// import { selectCurrentBoard } from 'redux/content/content-selectors';
import { updateColumn } from 'redux/content/content-operations';
const EditColumnModal = ({
  boardId,
  columnId,
  handleClose,
  title,
  butName,
  titleColumn,
}) => {
  // const board = useSelector(selectCurrentBoard);
  const [inputValue, setInputValue] = useState(titleColumn);
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const dispatch = useDispatch();
  const handleSumbit = evt => {
    evt.preventDefault();
    // const data = evt.currentTarget.elements.title.value;
  
    dispatch(updateColumn({ boardId, columnId, inputValue }));
    handleClose();
  };
  // const initialFormValues = { title: '' };

  return (
    <Wrap>
      {/* <Formik initialValues={initialFormValues} onSubmit={handleSumbit}> */}
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
      {/* </Formik> */}
    </Wrap>
  );
};

export default EditColumnModal;
