import { useContext } from 'react';
import icon from '../../../images/sprite.svg';
import {
  CreateBoardBox,
  CreateBoardIcon,
  TextBox,
} from './BoardCreateBtn.styled';
// import { CreateBoardModal } from 'components/Modals/CreateBoardModal/CreateBoardModal';
import { ModalContext } from '../../../contexts/index';
import AddBoard from 'components/Modals/AddBoard/AddBoard';

export const BoardCreateBtn = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const addBoardModal = () => {
    openModal({
      children: <AddBoard
              title={'New Board'}
              butName={'Create'}
              handleClose={closeModal}
            />
    });
  }

  return (
    <>
      <CreateBoardBox onClick={addBoardModal}>
        <TextBox>
          <p>Create a</p>
          <p>new board</p>
        </TextBox>
        <CreateBoardIcon>
          <use href={icon + '#icon-plus'}></use>
        </CreateBoardIcon>
      </CreateBoardBox>
    </>
  );
};
