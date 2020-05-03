import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from './components/AlertTemplate';
import App from './containers/App';

const options = {
  position: positions.MIDDLE,
  timeout: 30000,
  offset: '50px',
  type: 'info',
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 300,
  },
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
  , document.getElementById('app'),
);
