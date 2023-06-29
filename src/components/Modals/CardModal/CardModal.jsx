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

const CardModal = ({ handleClose, title, butName }) => {
  const [value, setValue] = useState('1');
  function chengeValue(event) {
    setValue(event.target.value);
  }

  return (
    <Wrap>
      <Form>
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
                checked={value === '2' ? true : false}
                type="radio"
                name="easy"
                value="2"
                onChange={chengeValue}
              />

              <Radio
                type="radio"
                name="medium"
                value="3"
                checked={value === '3' ? true : false}
                onChange={chengeValue}
              />

              <Radio
                type="radio"
                name="hard"
                value="4"
                checked={value === '4' ? true : false}
                onChange={chengeValue}
              />
              <Radio
                type="radio"
                name="without"
                value="1"
                checked={value === '1' ? true : false}
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
