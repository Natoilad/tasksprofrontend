import styled from 'styled-components';
import 'variables/variables';
import { darkFirst, darkGray, white100, white50 } from 'variables/variables';

export const SidebarWrapper = styled.section`
  height: 100vh;
  width: 225px;
  background-color: ${darkFirst};
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 260px;
    padding: 24px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 60px;
`;

export const SidebarIcon = styled.svg`
  width: 32px;
  height: 32px;
  background-color: ${darkGray};
  border-radius: 25%;
`;

export const SidebarHeader = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: ${white100};
`;

export const SideListName = styled.h4`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${white50};
  margin-bottom: 8px;
`;
