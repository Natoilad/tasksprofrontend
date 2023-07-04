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
import TransferCard from 'components/Modals/TranferCardModal/TransferCardModal';
import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import EditCardModal from 'components/Modals/CardModal/EditCardModal';
import { useDispatch } from 'react-redux';
import { removeTask } from 'redux/tasks/tasks-operations';
const Card = ({ task, columns, columnId }) => {
  const { title, priority, description, _id: id, deadline } = task;
  const { openModal, closeModal } = useContext(ModalContext);

  const editCardModal = () => {
    openModal({
      children: (
        <EditCardModal
          columnId={id}
          modalTitle={'Edit card'}
          task={task}
          butName={'Edit'}
          handleClose={closeModal}
        />
      ),
    });
  };

  const transferCardModal = () => {
    openModal({
      children: (
        <TransferCard
          columnId={columnId}
          columns={columns}
          taskId={id}
          handleClose={closeModal}
        />
      ),
    });
  };
  // console.log(priority);
  const dispatch = useDispatch();
  const handleRemove = evt => {
    evt.preventDefault();
    dispatch(removeTask(id));
  };

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
            <DeadLine>{deadline}</DeadLine>
          </Label>
        </PriorDeadLinWrapper>
        <BtnWrapper>
          <Button onClick={transferCardModal}>
            <IconSvg>
              <use href={icon + '#icon-arrow-circle-broken-right'}></use>
            </IconSvg>
          </Button>
          <Button onClick={editCardModal}>
            <IconSvg>
              <use href={icon + '#icon-pencil'}></use>
            </IconSvg>
          </Button>
          <Button onClick={handleRemove}>
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
