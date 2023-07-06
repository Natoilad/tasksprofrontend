import icon from '../../../images/sprite.svg';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { SendHelpEmail } from 'service/content-service';

export const ModalHelp = ({ handleClose, title, butName }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const data = {
      email: evt.currentTarget.elements.title.value,
      comment: evt.currentTarget.elements.comment.value,
    };
    SendHelpEmail(data);
    toast.success('Message send successful!');

    handleClose();
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Field
          id="title"
          type="text"
          name="email"
          placeholder="Email address"
          required
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
        />
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
