import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/Routes';
import './index.css';
import Substrate from './components/Substrate/Substrate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Substrate>
      <Router/>
    </Substrate>
  </React.StrictMode>
);