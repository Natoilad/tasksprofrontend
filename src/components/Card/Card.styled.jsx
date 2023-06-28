import styled from '@emotion/styled';
import 'variables/variables';
import {
  white50,
  white30,
  white10,
  white100,
  darkSecond,
  lowPriority,
  mediumPriority,
  highPriority,
} from 'variables/variables';

export const Conteiner = styled.div`
  position: relative;
  width: 335px;
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: ${darkSecond};
  &::before {
    // top: 0;
    // left: 0;
    // content: '';
    // position: absolute;
    // height: 100%;
    // width: 4px;
    // border-radius: 4px 0px 0px 4px;
    ${({ priority }) => {
      switch (priority) {
        case 'without':
          return `top: 0;
    left: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    background: ${white30}`;
        case 'eazy':
          return `
      top: 0;
    left: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    background: ${lowPriority}`;
        case 'medium':
          return `top: 0;
    left: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    background: ${mediumPriority}`;
        case 'hard':
          return `
      top: 0;
    left: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    background: ${highPriority}`;
        default:
          return;
      }
    }}
  }
`;

export const Title = styled.p`
  display: flex;
  color: ${white100};
  font-size: 14px;
  font-weight: 600;
  font-family: 'Poppins';
  letter-spacing: -0.28px;
  margin-bottom: 8px;
`;

export const Descriptions = styled.p`
  position: relative;
  display: flex;
  width: 290px;
  height: 38px;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  color: ${white50};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-size: 12px;
  line-height: 16px;
  font-family: 'Poppins';
  letter-spacing: -0.24px;
`;

export const SettingsBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;

  &::before {
    top: -14px;
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${white10};
`;

export const PriorDeadLinWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${white50};
  font-size: 8px;
  font-family: 'Poppins';
  letter-spacing: -0.16px;
`;

export const PriorityBtn = styled.button`
  position: relative;
  margin-top: 4px;
  margin-left: 16px;
  padding: 0px;
  background-color: transparent;
  border: none;
  color: ${white100};
  font-size: 10px;
  font-family: 'Poppins';
  letter-spacing: -0.2px;

  &::before {
    ${props => {
      switch (props.priority) {
        case 'without':
          return `top: 50%;
    left: -12px;
    position: absolute;
    transform: translate(-50%, -50%);
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${white30};`;
        case 'eazy':
          return `top: 50%;
    left: -12px;
    position: absolute;
    transform: translate(-50%, -50%);
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${lowPriority};`;
        case 'medium':
          return `top: 50%;
    left: -12px;
    position: absolute;
    transform: translate(-50%, -50%);
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${mediumPriority};`;
        case 'hard':
          return `top: 50%;
    left: -12px;
    position: absolute;
    transform: translate(-50%, -50%);
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${highPriority};`;
        default:
          return;
      }
    }}
  }
`;

export const DeadLine = styled.p`
  margin-top: 4px;
  color: ${white100};
  font-size: 10px;
  font-family: Poppins;
  letter-spacing: -0.2px;
`;
export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

export const IconSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${white50};
`;
