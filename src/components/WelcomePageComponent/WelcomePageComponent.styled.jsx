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
  transform: translate(-50%, -50%) 
`;

export const ImgWrap = styled.div`
  width: 124px;
  height: 124px;
  background-image: url(${boy});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
  width: 162px;
  height: 162px;
  margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
  margin-bottom: 30px;
  }
`;


export const LogoWrap = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
`;

export const SVG = styled.svg`
width: 40px;
height: 40px; 
  
  
  @media screen and (min-width: 768px) {
  width: 48px;
  height: 48px;
  }
`;

export const H1 = styled.h1`
font-family: Poppins;
font-size: 28px;
font-weight: 600;
line-height: 21px;
letter-spacing: -0.04em;
text-align: center;
  
  

  @media screen and (min-width: 768px) {
  font-size: 40px;
  line-height: 60px;
  }

  @media screen and (min-width: 1280px) {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const P = styled.p`
font-family: Poppins;
  padding: 0 10px;
  width: 335px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
  width: 473px;
    }
`;

export const Button = styled(Link)`
  background-color: inherit;
  color: #161616;
  width: 335px;
  height: 49px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
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

  @media screen and (min-width: 768px) {
  width: 344px;
    }
`;
