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
import TransferCard from 'components/Modals/TranferCard/TransferCard';
import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import EditCardModal from 'components/Modals/CardModal/EditCardModal';
import { useDispatch } from 'react-redux';
import { removeTask } from 'redux/tasks/tasks-operations';
import { useState } from 'react';
const Card = ({ task, columns, columnId }) => {
  const { title, priority, description, _id: id } = task;
  const { openModal, closeModal } = useContext(ModalContext);
  const [isOpenTransfer, setIsOpenTransfer] = useState(false);

<<<<<<< HEAD
const Card = ({ task }) => {
  const { title, priority, description } = task;
=======
  const togleTransferModal = () => {
    setIsOpenTransfer(state => !state);
  };

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
  // console.log(priority);
  const dispatch = useDispatch();
  const handleRemove = evt => {
    evt.preventDefault();
    dispatch(removeTask(id));
  };
>>>>>>> 7fe3497 (adds tasks operations)

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
          <Button onClick={togleTransferModal}>
            <IconSvg>
              <use href={icon + '#icon-arrow-circle-broken-right'}></use>
            </IconSvg>
            <TransferCard
              columnId={columnId}
              columns={columns}
              isOpen={isOpenTransfer}
              taskId={id}
            />
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
