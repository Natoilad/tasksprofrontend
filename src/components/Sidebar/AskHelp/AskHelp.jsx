import {
  HelpBox,
  HelpButton,
  HelpIcon,
  HelpSpan,
  HelpText,
} from './AskHelp.styled';
import pot from '../../../images/pot.png';
import icon from '../../../images/sprite.svg';
import { useState } from 'react';
import ContainerModal from 'components/Modals/ContainerModal';
import { ModalHelp } from 'components/Modals/ModalHelp/ModalHelp';

export const AskHelp = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <HelpBox>
      <img src={pot} alt="" />
      <HelpText>
        If you need help with <HelpSpan>TaskPro</HelpSpan> , check out our
        support resources or reach out to our customer support team.
      </HelpText>
      <HelpButton onClick={handleOpen}>
        <HelpIcon>
          <use href={icon + '#icon-help-circle'}></use>
        </HelpIcon>
        Need help?
      </HelpButton>
      {open && (
        <ContainerModal
          handleClose={handleClose}
          open={open}
          component={
            <ModalHelp
              title={'Need Help'}
              butName={'Send'}
              handleClose={handleClose}
            />
          }
        />
      )}
    </HelpBox>
  );
};
