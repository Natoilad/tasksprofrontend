import styled from 'styled-components';
import 'variables/variables';

export const Wrap = styled.div`
  position: relative;
  width: 350px;
  /* height: 221px; */
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBg};
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
  fill: ${({ theme }) => theme.colors.primaryText};
`;

export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  /* background-color: ${({ theme }) => theme.colors.btnIcon}; */
  fill: ${({ theme }) => theme.colors.btnText};
  stroke: ${({ theme }) => theme.colors.btnIcon};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-right: auto;
`;

export const Field = styled.input`
  width: 100%;
  height: 49px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  opacity: 0.4000000059604645;
  background: ${({ theme }) => theme.colors.tertiaryBg};
  box-shadow: 0px 4px 16px 0px ${({ theme }) => theme.colors.inputShadow};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 14px 0 14px 18px;

  &::placeholder {
    /* padding: 14px; */
  }

  &:focus {
    outline: 0;
    box-shadow: none;
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 49px;
  padding: 0;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.btnText};

  text-align: center;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.28px;
`;
