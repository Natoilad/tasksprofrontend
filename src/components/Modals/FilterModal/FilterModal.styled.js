import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';
import {
  white100,
  white50,
  darkModal,
  white10,
  lowPriority,
  mediumPriority,
  highPriority,
  white30,
  darkGray,
} from 'variables/variables';

export const Wrap = styled.div`
  position: relative;
  width: 300px;
  padding: 24px;
  border-radius: 8px;
  background: ${darkModal};
  font-family: 'Poppins', sans-serif;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  color: ${white100};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-right: auto;
  padding-bottom: 14px;
  border-bottom: 1px solid ${white10};
  margin-bottom: 14px;
`;

export const ImgContainer = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid ${white10};
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  position: relative;

  label {
    width: 28px;
    height: 28px;
    margin: 0;
    cursor: pointer;
  }
`;

export const Svg = styled.svg`
  width: 28px;
  height: 28px;
  fill: ${darkGray};
  border-radius: 6px;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const FieldSvg = styled(FormikField)`
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;

export const Text = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: ${white100};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const ShowAll = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${white50};
  cursor: pointer;
  text-decoration: underline;
  &:hover,
  &:focus {
    color: ${white100};
  }
  input {
    opacity: 0;
    position: absolute;
  }
`;

export const Span = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;

  background-color: ${props => {
    if (props.value === 'low') {
      return `${lowPriority}`;
    } else if (props.value === 'medium') {
      return `${mediumPriority}`;
    } else if (props.value === 'high') {
      return `${highPriority}`;
    } else if (props.value === 'without') {
      return `${white30}`;
    } else {
      return;
    }
  }};

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid ${darkModal};
    opacity: 0;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: ${white50};
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${white100};
    }
  }

  input {
    opacity: 0;
    position: absolute;
  }

  input:checked {
    & + ${Span}::before {
      opacity: 1;
    }
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
