import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import './components/App/App.css';
import { MainProvider } from './context/MainProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MainProvider>
    <div className="container">
      <header className="header">
        <h1>Interview Kit</h1>
      </header>
      <div className="main">
        <App />
      </div>
    </div>
  </MainProvider>
);

