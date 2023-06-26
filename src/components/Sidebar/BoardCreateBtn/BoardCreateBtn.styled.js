import styled from 'styled-components';
import 'variables/variables';
import { highPriority, white10, white100 } from 'variables/variables';

export const CreateBoardBox = styled.button`
  min-width: 197px;
  display: flex;
  padding: 14px 0px;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  border-top: 1px solid ${white10};
  border-bottom: 1px solid ${white10};
  border-left: none;
  border-right: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: ${white100};
  text-align: start;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    min-width: 212px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreateBoardIcon = styled.svg`
  width: 40px;
  height: 36px;
  fill: ${highPriority};
`;
