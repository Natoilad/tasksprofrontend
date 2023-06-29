import { useState } from 'react';

import ContainerModal from 'components/Modals/ContainerModal';
import icon from '../../../images/sprite.svg';
import {
  CreateBoardBox,
  CreateBoardIcon,
  TextBox,
} from './BoardCreateBtn.styled';
import { CreateBoardModal } from 'components/Modals/CreateBoardModal/CreateBoardModal';

export const BoardCreateBtn = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <CreateBoardBox onClick={handleOpen}>
        <TextBox>
          <p>Create a</p>
          <p>new board</p>
        </TextBox>
        <CreateBoardIcon>
          <use href={icon + '#icon-plus'}></use>
        </CreateBoardIcon>
      </CreateBoardBox>
      {open && (
        <ContainerModal
          handleClose={handleClose}
          open={open}
          component={
            <CreateBoardModal
              title={'New board'}
              butName={'Create'}
              handleClose={handleClose}
            />
          }
        />
      )}
    </>
  );
};
