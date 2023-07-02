import icon from '../../../images/sprite.svg';
import React from 'react';
import { Formik } from 'formik';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { addBoards } from 'redux/content/content-operations';
// import { selectContent } from 'redux/content/content-selectors';

import {
  Form,
  Field,
  Button,
  Wrap,
  CloseBtn,
  CloseIcon,
  Title,
} from './FilterModal.styled';

const initialFormValues = { title: '' };

export const CreateBoardModal = ({ handleClose, butName, title }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addBoards(values));
    actions.resetForm();
  };

  return (
    <Wrap>
      <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <Title>{title}</Title>
          <Field
            type="text"
            name="title"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Title"
          ></Field>
          <Field></Field>
          <Field></Field>
          <Button type="submit">{butName}</Button>
          <CloseBtn onClick={handleClose}>
            <CloseIcon>
              <use href={icon + '#icon-close'}></use>
            </CloseIcon>
          </CloseBtn>
        </Form>
      </Formik>
    </Wrap>
  );
};
