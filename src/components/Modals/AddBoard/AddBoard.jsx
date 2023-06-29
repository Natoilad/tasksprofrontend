import { useState } from 'react';
import icon from '../../../images/sprite.svg';
import {
  Form,
  Field,
  Button,
  Wrap,
  Title,
  CloseBtn,
  IconPlus,
  Priority,
  Label,
} from './AddBoard.styled';

const AddBoard = ({ handleClose, title, butName }) => {
  const [value, setValue] = useState(1);
  function chengeValue(event) {
    setValue(event.target.value);
  }

  return (
    <Wrap>
      <Form>
        <Title>{title}</Title>
        <Field id="title" type="text" name="title" placeholder="Title" />

        <Label>
          Icons
          <Priority>
            <input
              type="radio"
              name="radio"
              value="1"
              checked={value === '1' ? true : false}
              onChange={chengeValue}
            />

            <input
              type="radio"
              name="radio"
              value="2"
              checked={value === '2' ? true : false}
              onChange={chengeValue}
            />

            <input
              type="radio"
              name="radio"
              value="3"
              checked={value === '3' ? true : false}
              onChange={chengeValue}
            />
            <input
              type="radio"
              name="radio"
              value="4"
              checked={value === '4' ? true : false}
              onChange={chengeValue}
            />
          </Priority>
        </Label>
        <Label>
          Background
          <Priority>
            <input
              type="radio"
              name="radio"
              value="5"
              checked={value === '5' ? true : false}
              onChange={chengeValue}
            />

            <input
              type="radio"
              name="radio"
              value="6"
              checked={value === '6' ? true : false}
              onChange={chengeValue}
            />

            <input
              type="radio"
              name="radio"
              value="7"
              checked={value === '7' ? true : false}
              onChange={chengeValue}
            />
            <input
              type="radio"
              name="radio"
              value="8"
              checked={value === '8' ? true : false}
              onChange={chengeValue}
            />
          </Priority>
        </Label>

        <Button type="submit">
          <IconPlus width="28" height="28">
            <use href={icon + '#icon-plus-black'}></use>
          </IconPlus>
          {butName}
        </Button>
        <CloseBtn onClick={handleClose}>
          <svg width="18" height="18">
            <use href={icon + '#icon-close'}></use>
          </svg>
        </CloseBtn>
      </Form>
    </Wrap>
  );
};

export default AddBoard;
