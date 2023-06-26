import styled from 'styled-components';

import 'variables/variables';
import { darkFirst } from 'variables/variables';

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${darkFirst};
`;
