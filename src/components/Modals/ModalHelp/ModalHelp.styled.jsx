import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBg};

  @media (min-width: 375px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 500;
  font-size: 18px;  
  line-height: 27px;
  letter-spacing: -0.02em;
  margin-right: auto;
  margin-bottom: 24px;
`;

export const Field = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  opacity: 0.4000000059604645;
  background: ${({ theme }) => theme.colors.tertiaryBg};
  box-shadow: 0px 4px 16px 0px ${({ theme }) => theme.colors.inputShadow};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 14px 0 14px 18px;
  margin-bottom: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
    opacity: 1;
  }
`;

export const Comment = styled.textarea`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  opacity: 0.4000000059604645;
  background: ${({ theme }) => theme.colors.tertiaryBg};
  box-shadow: 0px 4px 16px 0px ${({ theme }) => theme.colors.inputShadow};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 14px 0 14px 18px;
  margin-bottom: 24px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.btnText};
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  /* &:focus {
    background: ${({ theme }) => theme.colors.btnFocus}
      }; */
  &:hover {
   background: ${({ theme }) => theme.colors.btnFocus};
   };
`;

export const CloseBtn = styled.button`
  display: block;
  background: none;
  position: absolute;
  border: none;
  padding: 0;
  top: 14px;
  right: 14px;
`;

export const CloseIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.colors.primaryText};
  /* stroke: black;
  fill: none; */
  `;
