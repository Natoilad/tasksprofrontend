import styled from 'styled-components';
import 'variables/variables';
import { white50, white100 } from 'variables/variables';

export const Wrap = styled.div`
  position: relative;
  width: 350px;
  /* height: 221px; */
  padding: 24px;
  border-radius: 8px;
  background: #151515;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  &:not(:last-child) {
    gap: 24px;
  }
`;

export const Title = styled.h4`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-right: auto;
`;

export const SettingsBlock = styled.div`
  width: 100%;
`;

export const Field = styled.input`
  width: 100%;
  height: 49px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4000000059604645;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: #fff;
  padding: 14px 0 14px 18px;

  &::placeholder {
    /* padding: 14px; */
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-family: 'Poppins';
  letter-spacing: -0.24px;
  height: 100%;
`;

export const Priority = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  width: 100%;
  height: 49px;
  padding: 0;
  cursor: pointer;
  border: none;
  margin-top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: #bedbb0;

  text-align: center;
  color: #161616;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const IconPlus = styled.svg`
  border-radius: 8px;
`;

export const IconSvg = styled.input`
  display: none;
  &:checked + label > svg {
    stroke: ${white100};
  }
`;

export const LabelSvg = styled.label`
  cursor: pointer;
`;
export const LabeImgBg = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const Bgpriority = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  width: 260px;
`;

export const SSvg = styled.svg`
  stroke: ${white50};
`;

export const BgImg = styled.img`
  border-radius: 8px;
  width: 28px;
  height: 28px;
`;
