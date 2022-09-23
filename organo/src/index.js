import React from 'react';
import ReactDOM from 'react-dom/client';
import './index';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // Método render destinado ao react
  <React.StrictMode> {/* Ajuda a ter mensagens de erros mais amigaveis e avisos */}
    <App />
  </React.StrictMode>
);
