import styled from '@emotion/styled';
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// export const Btn = styled(Button)({
//   display: 'flex',
//   justifyContent: 'flex-start',
//   fontSize: '14px',
//   fontFamily: 'Poppins',
//   fontWeight: '500',
//   letterSpacing: '-0.28px',
//   textAlign: 'left',
//   backgroundColor: 'transparent',
//   color: `${({ theme }) => theme.color.accent}`,
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     padding: '0',
//     color: `${({ theme }) => theme.colors.accent}`,
// });

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: rgba(190, 219, 176, 1);
`;
export const ChevronIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: rgba(190, 219, 176, 1);
`;
//   fill: ${({ theme }) => theme.colors.accent}
