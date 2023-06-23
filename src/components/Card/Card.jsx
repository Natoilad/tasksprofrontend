import {
  Conteiner,
  Title,
  Descriptions,
  SettingsBlock,
  PriorDeadLinWrapper,
  DeadLine,
  Priority,
  BtnWrapper,
  Button,
} from './Card.styled';

const Card = ({ title, id }) => {
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
          <Priority>-priority- </Priority>
          <DeadLine>-deadline- </DeadLine>
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
