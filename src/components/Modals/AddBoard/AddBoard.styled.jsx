import styled from 'styled-components';
import 'variables/variables';

export const Wrap = styled.div`
  position: relative;
  width: 350px;
  /* height: 221px; */
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondaryBg};

   @media (min-width: 375px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
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
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 27px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-right: auto;
`;

export const SettingsBlock = styled.div`
  width: 100%;
`;

export const Field = styled.input`
  width: 100%;
  height: 49px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  opacity: 0.4000000059604645;
  background: ${({ theme }) => theme.colors.tertiaryBg};
  box-shadow: 0px 4px 16px 0px ${({ theme }) => theme.colors.inputShadow};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 14px 0 14px 18px;

  &::placeholder {
    /* padding: 14px; */
  }

  &:focus {
    outline: 0;
    opacity: 1;
  }
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 14px;
  line-height: 21px;
  font-family: 'Poppins';
  letter-spacing: -0.02em;
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
  background: ${({ theme }) => theme.colors.accent};
  text-align: center;
  color: ${({ theme }) => theme.colors.btnText};
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  /* &:focus {
    background: ${({ theme }) => theme.colors.btnFocus}
      }; */
  &:hover {
    background: ${({ theme }) => theme.colors.btnFocus}
  };
`;

export const IconPlus = styled.svg`
  border-radius: 8px;
  fill: ${({ theme }) => theme.colors.iconPlusFill};
  stroke: ${({ theme }) => theme.colors.iconPlusStroke};
  `;

export const InputSvg = styled.input`
  display: none;
  &:checked + label > svg {
    stroke: ${({ theme }) => theme.colors.primaryText};
  }
`;

export const LabelSvg = styled.label`
  cursor: pointer;
`;

export const Bgpriority = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 14px;
  width: 260px;
`;

export const InputBlockSvg = styled.input`
  display: none;
`;

export const LabelBlockSvg = styled.label`
  cursor: pointer;
  height: 28px;
`;

export const BlockSvg = styled.svg`
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const LabeImgBg = styled.label`
  cursor: pointer;
`;

export const ImgBgList = styled.ul`
  /* width: calc((100% - 8px) / 9); */
`;

export const ImgBgItem = styled.li`
  /* flex-basis: calc((100% - 8px) / 9); */
`;

export const SSvg = styled.svg`
  stroke: ${({ theme }) => theme.colors.secondaryText};
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.6);
  }
`;

export const BgImg = styled.img`
  border-radius: 6px;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const InputImg = styled.input`
  display: none;
  /* transition: transform 0.25s ease; */
  &:checked + img {
    /* transform: scale(1.2); */
    border: ${({ theme }) => theme.colors.primaryText};
  }
`;

export const CloseIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.colors.primaryText};
`;
