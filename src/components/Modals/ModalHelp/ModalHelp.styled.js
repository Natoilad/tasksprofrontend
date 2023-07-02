import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 400px;
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-right: auto;
  margin-bottom: 24px;
`;

export const Field = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
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
  line-height: 1.5;
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
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.28px;
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
`;
