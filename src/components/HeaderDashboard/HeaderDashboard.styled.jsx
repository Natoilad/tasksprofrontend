import styled from '@emotion/styled';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoardName = styled.h4`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const FilterBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  transition: all 0.5s ease-in-out;

  &: hover, &: focus{
    color: #bedbb0;
  }`;
