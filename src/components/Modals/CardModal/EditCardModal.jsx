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
import { updateTask } from 'redux/tasks/tasks-operations';
const EditCardModal = ({
  task: { title, description, priority, _id: id },
  modalTitle,
  handleClose,
  columnId,
  // btnName,
}) => {
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [raidoValue, setRadioValue] = useState(priority);
  const dispatch = useDispatch();
  function chengeValue(event) {
    setRadioValue(event.target.value);
  }

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'title':
        setTaskTitle(evt.target.value);
        break;
      case 'description':
        setTaskDescription(evt.target.value);
        break;
      default:
        break;
    }
  };

  const handleUpdate = event => {
    event.preventDefault();
    // const title = event.currentTarget.elements.title.value
    // const { title, description, priority } = event.currentTarget.elements;
    const task = {
      title: taskTitle,
      description: taskDescription,
      priority: raidoValue,
      // deadline: deadline.value,
    };
    dispatch(updateTask({ id, task }));
    handleClose();
  };

  return (
    <Wrap>
      <Form onSubmit={handleUpdate}>
        <Title>{modalTitle}</Title>
        <Field
          value={taskTitle}
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <Description
          value={taskDescription}
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <SettingsBlock>
          <Label>
            Label color
            <Priority>
              <Radio
                checked={raidoValue === 'low' ? true : false}
                type="radio"
                name="priority"
                value="low"
                onChange={chengeValue}
              />

              <Radio
                type="radio"
                name="priority"
                value="medium"
                checked={raidoValue === 'medium' ? true : false}
                onChange={chengeValue}
              />

              <Radio
                type="radio"
                name="priority"
                value="high"
                checked={raidoValue === 'high' ? true : false}
                onChange={chengeValue}
              />
              <Radio
                type="radio"
                name="priority"
                value="none"
                checked={raidoValue === 'none' ? true : false}
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
          Edit
          {/* {btnName} */}
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

export default EditCardModal;
