import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrap = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBg};

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  line-height: 1.5;
  margin-right: auto;
  margin-bottom: 24px;
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
`;

export const EditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarBox = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  margin-bottom: 25px;

  cursor: pointer;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.pageBg};
  fill: ${({ theme }) => theme.colors.userIconFill};

  & .icon_dropzone {
    width: 68px;
    height: 68px;
    border-radius: 8px;
    overflow: hidden;
  }

  & .icon_user {
    width: 68px;
    height: 68px;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    .btnBox {
      background: ${({ theme }) => theme.colors.btnFocus};
    }
  }
`;

export const AddBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  position: absolute;
  bottom: -12px;
  left: 50%;
  cursor: pointer;
  pointer-events: none;

  background: ${({ theme }) => theme.colors.additionalAccent};

  width: 24px;
  height: 24px;
  border-radius: 4px;
  transform: translate(-50%);

  fill: black;

  &:hover {
    background: ${({ theme }) => theme.colors.btnFocus};
  }
`;

export const FormInput = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 0 14px 18px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  box-shadow: 0px 4px 16px 0px ${({ theme }) => theme.colors.inputShadow};
  opacity: 0.4000000059604645;

  background: ${({ theme }) => theme.colors.tertiaryBg};
  color: ${({ theme }) => theme.colors.primaryText};

  &:focus {
    outline: 0;
    opacity: 1;
  }

  & + & {
    margin-top: 14px;
  }
`;

export const PasswordWrap = styled.div`
  position: relative;
  margin-top: 14px;
  width: 100%;
`;

export const EyeButton = styled.button`
  position: absolute;
  top: 14px;
  right: 12px;

  background: inherit;
  border: none;
  cursor: pointer;
  display: flex;

  justify-content: center;

  opacity: 0.4000000059604645;
  stroke: ${({ theme }) => theme.colors.primaryText};

  &:hover {
    opacity: 1;
  }
`;

export const SendBtn = styled.button`
  width: 100%;

  padding-top: 14px;
  padding-bottom: 14px;

  margin-top: 24px;
  /* cursor: pointer; */
  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.btnText};

  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02;

  /* &:hover {
    background: ${({ theme }) => theme.colors.btnFocus};
  } */
`;

export const ErrorBox = styled.div`
  position: relative;
  padding: 2px 0px;

  font-size: 10px;

  color: red;
`;
