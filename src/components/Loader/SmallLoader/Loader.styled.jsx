import styled from 'styled-components';

import 'variables/variables';
import { darkFirst } from 'variables/variables';

export const Wrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${darkFirst};
`;
