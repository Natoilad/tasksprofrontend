import styled from 'styled-components';
import { darkGray, highPriority, white100 } from 'variables/variables';

export const HelpBox = styled.div`
  padding: 20px;
  background-color: ${darkGray};
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const HelpText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${white100};
  margin-bottom: 18px;
`;
export const HelpSpan = styled.span`
  color: ${highPriority};
`;

export const HelpButton = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  border: none;
  gap: 8px;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${white100};
`;

export const HelpIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
