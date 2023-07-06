import styled from 'styled-components';
import 'variables/variables';
import { lowPriority, mediumPriority, highPriority } from 'variables/variables';

export const Conteiner = styled.div`
  position: relative;
  width: 335px;
  padding: 14px 20px 14px 24px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.cardBg};
  overflow: hidden;

  &::before {
    top: 0;
    left: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    border-radius: 4px 0px 0px 4px;

    ${({ priority, theme }) => {
      switch (priority) {
        case 'none':
          return `background: ${theme.colors.taskWithoutPriority}`;
        case 'low':
          return `background: ${lowPriority}`;
        case 'medium':
          return `background: ${mediumPriority}`;
        case 'high':
          return `background: ${highPriority}`;
        default:
          return;
      }
    }}
  }
`;

export const Title = styled.p`
  display: flex;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 14px;
  font-weight: 600;
  font-family: 'Poppins';
  line-height: 21px;
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
  color: ${({ theme }) => theme.colors.secondaryText};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
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
    background-color: ${({ theme }) => theme.colors.barLine};
  }
`;

export const PriorDeadLinWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  font-family: 'Poppins';
  letter-spacing: -0.16px;
`;

export const Priority = styled.p`
  position: relative;
  margin-top: 4px;
  margin-left: 16px;
  padding: 0px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 400;
  line-height: 15px;
  font-size: 10px;
  font-family: 'Poppins';
  letter-spacing: -0.2px;

  &::before {
    top: 50%;
    left: -12px;
    position: absolute;
    transform: translate(-50%, -50%);
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    ${({ priority, theme }) => {
      switch (priority) {
        case 'none':
          return `background: ${theme.colors.taskWithoutPriority}`;
        case 'low':
          return `background: ${lowPriority}`;
        case 'medium':
          return `background: ${mediumPriority}`;
        case 'high':
          return `background: ${highPriority}`;
        default:
          return;
      }
    }}
  }
`;

export const DeadLine = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 10px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
`;
export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
`;

export const IconSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.secondaryText};
`;
