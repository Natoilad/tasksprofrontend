import icon from '../../../images/sprite.svg';
import React from 'react';
import { Formik } from 'formik';

import {
  Form,
  Field,
  Button,
  Wrap,
  CloseBtn,
  CloseIcon,
  Title,
} from './CreateBoardModal.styled';

export const CreateBoardModal = ({ handleClose, butName, title }) => {
  return (
    <Wrap>
      <Formik>
        <Form>
          <Title>{title}</Title>
          <Field></Field>
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
