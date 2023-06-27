import styled from 'styled-components';

export const HeaderComponent = styled.header`
  background-color: #161616;
  font-size: 14px;

  padding-top: 14px;
  padding-bottom: 14px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;

  @media screen and (min-width: 768px) {
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

export const HeaderBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    justify-content: flex-end;

    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeDropdown = styled.div`
  position: relative;
  margin-right: 14px;

  ul {
    z-index: 999;
    position: absolute;
    top: 22px;
    left: -16px;

    background-color: #151515;
    border: 1px solid #bedbb0;
    border-radius: 8px;
    width: 100px;

    list-style-type: none;
    margin: 0;
    padding: 18px;
    box-shadow: 0px 4px 16px 0px #1111111a;
  }

  li {
    margin: 0;
    font-weight: 400;
  }

  li + li {
    margin-top: 4px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 4px;

    text-align: left;

    background: none;

    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;

    color: rgba(255, 255, 255, 0.8);
    fill: rgba(255, 255, 255, 0.8);
  }

  ul > li > button {
    &:hover {
      color: #bedbb0;
    }
  }
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #fff;
    margin-right: 8px;
  }
`;

export const AvatarBox = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;

  border-radius: 8px;

  background-color: #1f1f1f;
  fill: #151515;
`;

export const BurgerMenuBtn = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
