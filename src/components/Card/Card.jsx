import {
  Conteiner,
  Title,
  Descriptions,
  SettingsBlock,
  PriorDeadLinWrapper,
  Label,
  BtnWrapper,
  Button,
  PriorityBtn,
} from './Card.styled';
import { useState } from 'react';
const Card = ({ title, id }) => {
  const [priority, setPriority] = useState('without');

  return (
    <Conteiner>
      <Title>task name</Title>
      <Descriptions>
        Create a visually stunning and eye-catching watch dial design that
        embodies our brand's essence of sleek aesthetics and modern elegance.
        Your design should be unique, innovative, and reflective of the latest
        trends in watch design.
      </Descriptions>
      <SettingsBlock>
        <PriorDeadLinWrapper>
          <Label>
            priority
            <PriorityBtn type="button">{priority}</PriorityBtn>
          </Label>
          <Label>
            defadline
            <input style={{ marginTop: '4px' }} type="date" />
          </Label>
        </PriorDeadLinWrapper>
        <BtnWrapper>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </BtnWrapper>
      </SettingsBlock>
    </Conteiner>
  );
};
export default Card;
