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
  Priority,
  DeadLine,
} from './Card.styled';

const Card = ({ task }) => {
  const { title, priority, description } = task;
  console.log(priority);

  return (
    <Conteiner priority={priority}>
      <Title>{title}</Title>
      <Descriptions>{description}</Descriptions>
      <SettingsBlock>
        <PriorDeadLinWrapper>
          <Label>
            priority
            <Priority priority={priority}>{priority}</Priority>
          </Label>
          <Label>
            defadline
            <DeadLine>10/06/2023</DeadLine>
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
