import styled from 'styled-components';
import 'variables/variables';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.p`
  flex-direction: column;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.messageText};
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;

  @media (min-width: 375px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 486px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`;

export const Link = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.accent};
`;
