import icon from '../../../images/sprite.svg';
import {
  Form,
  Field,
  Description,
  SettingsBlock,
  Label,
  Button,
  Wrap,
  Title,
  CloseIcon,
  CloseBtn,
  IconPlus,
  Priority,
  ButPiker,
  ChevronIcon,
  Radio,
} from './CardModal.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from 'redux/tasks/tasks-operations';
const CardModal = ({ board, handleClose, title, butName, columnId }) => {
  const [value, setValue] = useState('1');
  const dispatch = useDispatch();
  function chengeValue(event) {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.currentTarget.elements.description.value);

    const { owner, _id: id } = board;
    // const title = event.currentTarget.elements.title.value
    const { title, description, priority } = event.currentTarget.elements;
    const task = {
      title: title.value,
      description: description.value,
      priority: priority.value,
      // deadline: deadline.value,
      userId: { owner },
      boardId: { id },
      columnId: { columnId },
    };
    dispatch(addTasks(task));
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Field id="title" type="text" name="title" placeholder="Title" />
        <Description
          id="description"
          type="text"
          name="description"
          placeholder="Description"
        />
        <SettingsBlock>
          <Label>
            Label color
            <Priority>
              <Radio
                checked={value === 'low' ? true : false}
                type="radio"
                name="priority"
                value="low"
                onChange={chengeValue}
              />

              <Radio
                type="radio"
                name="priority"
                value="medium"
                checked={value === 'medium' ? true : false}
                onChange={chengeValue}
              />

              <Radio
                type="radio"
                name="priority"
                value="high"
                checked={value === 'high' ? true : false}
                onChange={chengeValue}
              />
              <Radio
                type="radio"
                name="priority"
                value="none"
                checked={value === 'none' ? true : false}
                onChange={chengeValue}
              />
            </Priority>
          </Label>
          <Label>
            Deadline
            <ButPiker style={{ marginTop: '4px' }}>
              Today, March 8
              <ChevronIcon>
                <use href={icon + '#icon-chevron-down'}></use>
              </ChevronIcon>
            </ButPiker>
          </Label>
        </SettingsBlock>

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

export default CardModal;
