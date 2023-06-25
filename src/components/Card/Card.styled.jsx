import styled from '@emotion/styled';

export const Conteiner = styled.div`
  position: relative;
  width: 291px;
  padding: 0px 20px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #121212;

  &::before {
    top: 0;
    left: -4px;
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: red;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Poppins';
  letter-spacing: -0.28px;
`;

export const Descriptions = styled.p`
  position: relative;
  display: flex;
  width: 290px;
  height: 38px;
  margin-bottom: 14px;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.5);
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
  padding-top: 20px;
  padding-bottom: 20px;

  &::before {
    ${props => {
      switch (props.priority) {
        case 'without':
          return `top: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);`;
        case 'medium':
          return `top: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #E09CB5;`;
        default:
          return;
      }
    }}
  }
`;

export const PriorDeadLinWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.5);
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
  color: #fff;
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
    background: rgba(255, 255, 255, 0.3);`;
        case 'medium':
          return `top: 50%;
    left: -12px;
    position: absolute;
    transform: translate(-50%, -50%);
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #E09CB5;`;
        default:
          return;
      }
    }}
  }
`;

export const BtnWrapper = styled.div``;

export const Button = styled.button``;
