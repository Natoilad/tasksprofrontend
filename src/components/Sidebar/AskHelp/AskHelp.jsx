import {
  HelpBox,
  HelpButton,
  HelpIcon,
  HelpSpan,
  HelpText,
} from './AskHelp.styled';
import pot from '../../../images/pot.png';
import icon from '../../../images/sprite.svg';

export const AskHelp = () => {
  return (
    <HelpBox>
      <img src={pot} alt="" />
      <HelpText>
        If you need help with <HelpSpan>TaskPro</HelpSpan> , check out our
        support resources or reach out to our customer support team.
      </HelpText>
      <HelpButton>
        <HelpIcon>
          <use href={icon + '#icon-help-circle'}></use>
        </HelpIcon>
        Need help?
      </HelpButton>
    </HelpBox>
  );
};
