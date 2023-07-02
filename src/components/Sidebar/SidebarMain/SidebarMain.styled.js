import styled from 'styled-components';
import 'variables/variables';

export const SidebarWrapper = styled.section`
  /* height: 100vh; */
  width: 225px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
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
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const SidebarIcon = styled.svg`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.barSecondaryText};
  border-radius: 25%;
`;

export const SidebarHeader = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.barPrimaryText};
`;

export const SideListName = styled.h4`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.barSecondaryText};
  margin-bottom: 8px;
`;

export const SidebarWrap = styled.div`
  margin-top: auto;
`;