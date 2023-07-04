import styled from 'styled-components';
import { LocalizationProvider } from '@mui/x-date-pickers';
import 'variables/variables';
import {
  highPriority,
  lowPriority,
  mediumPriority,
  white30,
} from 'variables/variables';

export const Wrap = styled.div`
  position: relative;
   /* height: 221px; */
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBg};

   @media (min-width: 375px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
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
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
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

  /* &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  } */

  &:focus {
    outline: 0;
    box-shadow: none;
    opacity: 1;
  }
`;

export const Description = styled.textarea`
  display: block;
  width: 100%;
  height: 154px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  opacity: 0.4000000059604645;
  background: ${({ theme }) => theme.colors.tertiaryBg};
  box-shadow: 0px 4px 16px 0px ${({ theme }) => theme.colors.inputShadow};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 14px 0 14px 18px;
  resize: none;

  /* &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText}
  } */

  &:focus {
    outline: 0;
    opacity: 1;
  }
`;

export const SettingsBlock = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  /* margin-right: auto; */
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 12px;
  font-family: 'Poppins';
  letter-spacing: -0.24px;
`;

export const Priority = styled.div`
  margin-top: 4px;
  margin-bottom: 14px;
  display: flex;
  gap: 8px;
`;

export const Radio = styled.input`
  position: relative;
  visibility: hidden;
  &::after {
    visibility: visible;
    top: 0;
    left: 0;
    z-index: 10;
    position: absolute;
    content: '';
    border-radius: 50%;
    padding: 5px;
    display: block;
    width: 14px;
    height: 14px;
    ${props => {
      switch (props.value) {
        case 'low':
          return `background-color: ${lowPriority}`;
        case 'medium':
          return `background-color: ${mediumPriority}`;
        case 'high':
          return `background-color: ${highPriority} `;
        case 'none':
          return `background-color: ${white30}`;
        default:
          return;
      }
    }}
  }
  &:checked {
    &::after {
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      content: '';
      border-radius: 50%;
      display: block;
      width: 6px;
      height: 6px;
      padding: 0;
    }

    &:checked {
      &::before {
        visibility: visible;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        content: '';
        border-radius: 50%;
        width: 14px;
        height: 14px;
        border: 2px solid;
        background-color: transparent;
        ${props => {
          switch (props.value) {
            case 'low':
              return `border-color: ${lowPriority}`;
            case 'medium':
              return `border-color: ${mediumPriority}`;
            case 'high':
              return `border-color: ${highPriority} `;
            case 'none':
              return `border-color: ${white30}`;
            default:
              return;
          }
        }}
      }
    }
  }
`;

export const ButPiker = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ChevronIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.accent};
`;

export const Provider = styled(LocalizationProvider)`
  visibility: hidden;
  height: 18px;
`;

export const Button = styled.button`
  width: 100%;
  height: 49px;
  padding: 0;
  cursor: pointer;

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
  /* &:focus {
    background: ${({ theme }) => theme.colors.btnFocus}
      }; */
  &:hover {
    background: ${({ theme }) => theme.colors.btnFocus}
  };
`;
