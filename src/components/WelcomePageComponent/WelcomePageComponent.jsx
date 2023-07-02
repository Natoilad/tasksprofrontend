import {
  Section,
  Wrap,
  SVG,
  P,
  H1,
  ImgWrap,
  LogoWrap,
  Button,
} from './WelcomePageComponent.styled';

import icon from '../../images/sprite.svg';

export const WelcomePageComponent = () => {
  return (
    <Section>
      <Wrap>
        <ImgWrap />
        <LogoWrap>
          <SVG>
            <use href={icon + '#appIcon'}></use>
          </SVG>
          <H1>Task Pro</H1>
        </LogoWrap>

        <P>
          Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!
        </P>
        <Button to="/auth/register">Registration</Button>
        <Button to="/auth/login">Log In</Button>
      </Wrap>
    </Section>
  );
};
