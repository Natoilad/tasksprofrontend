import {
  HelpBox,
  HelpButton,
  HelpIcon,
  HelpSpan,
  HelpText,
} from './AskHelp.styled';
import pot from '../../../images/pot.png';
import icon from '../../../images/sprite.svg';
import { useContext } from 'react';
import { ModalContext } from '../../../contexts/index';
import { ModalHelp } from 'components/Modals/ModalHelp/ModalHelp';

export const AskHelp = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const helpModal = () => {
    openModal({
      children: <ModalHelp
              title={'Need Help'}
              butName={'Send'}
              handleClose={closeModal}
            />
    });
  }

  return (
    <HelpBox>
      <img src={pot} alt="" />
      <HelpText>
        If you need help with <HelpSpan>TaskPro</HelpSpan> , check out our
        support resources or reach out to our customer support team.
      </HelpText>
      <HelpButton onClick={helpModal}>
        <HelpIcon>
          <use href={icon + '#icon-help-circle'}></use>
        </HelpIcon>
        Need help?
      </HelpButton>
    </HelpBox>
  );
};
