import styled from 'styled-components';
import 'variables/variables';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  // max-width: 375px;

  @media (min-width: 768px) {
    margin-top: 26px;
    margin-bottom: 26px;
    padding-left: 32px;
    padding-right: 32px;
    // max-width: 705px;
  }

  @media (min-width: 1280px) {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 24px;
    padding-right: 24px;
    // max-width: 1080px;
  }
`;

export const BoardName = styled.h4`
  display: flex;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins';
  letter-spacing: -0.28px;
`;

export const FilterBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: none;
  border: none;
  color: ${({ theme }) => theme.colors.tertiaryText};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
<<<<<<< Updated upstream
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
=======
  /* transition: all 0.5s ease-in-out; */
  svg {
    width: 16px;
    height: 16px;
    stroke: ${({ theme }) => theme.colors.tertiaryText};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    svg {
      stroke: ${({ theme }) => theme.colors.accent};
    }
>>>>>>> Stashed changes
  }
`;
