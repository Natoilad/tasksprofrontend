import icon from '../../../images/sprite.svg';
import React from 'react';

import {
  Wrap,
  Button,
  CloseBtn,
  Comment,
  Form,
  Title,
  Field,
  CloseIcon,
} from './ModalHelp.styled';

export const ModalHelp = ({ handleClose, title, butName }) => {
  return (
    <Wrap>
      <Form>
        <Title>{title}</Title>
        <Field id="title" type="text" name="title" placeholder="Title" />
        <Comment
          id="comment"
          type="text"
          name="comment"
          placeholder="Comment"
        />
        <Button type="submit">{butName}</Button>
        <CloseBtn onClick={handleClose}>
          <CloseIcon>
            <use href={icon + '#icon-close'}></use>
          </CloseIcon>
        </CloseBtn>
      </Form>
    </Wrap>
  );
};
