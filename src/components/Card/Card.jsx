import icon from '../../images/sprite.svg';
import {
  Conteiner,
  Title,
  Descriptions,
  SettingsBlock,
  PriorDeadLinWrapper,
  Label,
  BtnWrapper,
  IconSvg,
  Button,
  PriorityBtn,
} from './Card.styled';
import { useState } from 'react';
const Card = ({ title, id }) => {
  const [priority, setPriority] = useState('without');

  const handlechange = evt => {
    setPriority('medium');
  };

  return (
    <Conteiner>
      <Title>task name</Title>
      <Descriptions>
        Create a visually stunning and eye-catching watch dial design that
        embodies our brand's
      </Descriptions>
      <SettingsBlock>
        <PriorDeadLinWrapper>
          <Label>
            priority
            <PriorityBtn
              priority={priority}
              onClick={handlechange}
              type="button"
            >
              {priority}
            </PriorityBtn>
          </Label>
          <Label>
            defadline
            <input style={{ marginTop: '4px' }} type="date" />
          </Label>
        </PriorDeadLinWrapper>
        <BtnWrapper>
          <Button>
            <IconSvg>
              <use href={icon + '#icon-arrow-circle-broken-right'}></use>
            </IconSvg>
          </Button>
          <Button>
            <IconSvg>
              <use href={icon + '#icon-pencil'}></use>
            </IconSvg>
          </Button>
          <Button>
            <IconSvg>
              <use href={icon + '#icon-trash'}></use>
            </IconSvg>
          </Button>
        </BtnWrapper>
      </SettingsBlock>
    </Conteiner>
  );
};
export default Card;
