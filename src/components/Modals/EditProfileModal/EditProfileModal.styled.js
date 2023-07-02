import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 400px;
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-right: auto;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.btnText};
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
