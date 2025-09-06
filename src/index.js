import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // ← shto këtë

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ← rreth App me BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

