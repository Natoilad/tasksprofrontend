import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormWrap, Field as Input } from 'formik';

export const Section = styled.section`
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  height: 100vh;
  background: linear-gradient(#f6f6f7, #bedbb0);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: 335px;
  min-height: 363px;

  border-radius: 8px;
  background: #151515;
`;

export const LinkWrap = styled.div`
  margin: 24px 0 40px 24px;
  border-radius: 8px;
  display: flex;
  gap: 14px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  cursor: pointer;

  &.active {
    color: #ffffff;
  }
`;

export const Form = styled(FormWrap)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Field = styled(Input)`
  width: 279px;
  height: 49px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4000000059604645;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: #fff;
  margin-bottom: 14px;

  &::placeholder {
    padding: 14px 0 14px 18px;
  }
  // &:not(:last-child) {
  //   margin-bottom: 14px;
  // }
  // &:nth-child(3) {
  //   margin-bottom: 24px;
  // }
`;

export const Button = styled.button`
  width: 287px;
  height: 49px;
  padding: 0;
  cursor: pointer;

  border-radius: 8px;
  background: #bedbb0;
  color: #161616;
  margin-bottom: 24px;
  margin-top: 10px;

  text-align: center;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.28px;
`;

export const ErrorWrap = styled.div`
  color: #ff6600;
  margin-bottom: 8px;

  text-align: center;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.28px;
`;
