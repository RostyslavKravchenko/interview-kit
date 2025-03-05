import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { MainProvider } from './context/MainProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MainProvider>
    <App />
  </MainProvider>
);

