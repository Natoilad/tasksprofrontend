import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { store, persistR } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalStyles from './index.css';
import { darkFirst, lightFirst, violetAccent } from 'variables/variables';

const GlobalStyle = createGlobalStyle`
  ${GlobalStyles}
`;
const theme = {
  colors: {
    dark: `${darkFirst}`,
    light: `${lightFirst}`,
    violet: `${violetAccent}`,
  },
  media: {
    phone: '(max-width: 475px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
    desktop: '(max-width: 1280px)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistR}>
          <BrowserRouter basename="/tasksprofrontend">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
