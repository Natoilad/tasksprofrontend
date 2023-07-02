import styled from '@emotion/styled';
import 'variables/variables';
import { white50, highPriority } from 'variables/variables';
export const Wrapper = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  margin-right: auto;
  margin-left: auto;
  padding-top: 349px;
  padding-bottom: 349px;
  text-align: center;
`;

export const Text = styled.p`
  flex-direction: column;
  flex-shrink: 0;
  color: ${white50};
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 375px) {
    width: 90vw;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 486px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`;

export const Link = styled.span`
  white-space: nowrap;
  color: ${highPriority};
`;
