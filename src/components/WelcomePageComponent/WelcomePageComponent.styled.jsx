import styled from 'styled-components';
import boy from '../../images/boy.png';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  height: 100vh;
  background: linear-gradient(#f6f6f7, #bedbb0);
  position: relative;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) }
`;

export const LogoWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ImgWrap = styled.div`
  width: 124px;
  height: 124px;
  background-image: url(${boy});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: calc(28 / 42);
  text-align: center;
`;

export const P = styled.p`
  width: 335px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02px;
`;

export const Button = styled(Link)`
  background-color: inherit;
  color: #161616;
  width: 335px;
  height: 49px;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(14 / 21);
  letter-spacing: -0.02px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #161616;
    color: #ffffff;
  }
`;
