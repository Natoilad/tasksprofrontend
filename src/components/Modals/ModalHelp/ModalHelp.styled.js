import styled from 'styled-components';
import {
  white100,
  white50,
  highPriority,
  darkModal,
  darkFirst,
} from 'variables/variables';

export const Wrap = styled.div`
  position: relative;
  width: 400px;
  padding: 24px;
  border-radius: 8px;
  background: ${darkModal};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h4`
  color: ${white100};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-right: auto;
`;

export const Field = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 8px;
  border: 1px solid ${highPriority};
  opacity: 0.4000000059604645;
  background: ${darkModal};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: ${white100};
  padding: 14px 0 14px 18px;

  &::placeholder {
    color: ${white50};
  }
`;

export const Comment = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid ${highPriority};
  opacity: 0.4000000059604645;
  background: ${darkModal};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: ${white100};
  padding: 14px 0 14px 18px;
  resize: none;

  &::placeholder {
    color: ${white50};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${highPriority};
  color: ${darkFirst};
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
