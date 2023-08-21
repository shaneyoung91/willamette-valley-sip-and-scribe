import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
// Import the top-level BrowserRouter component
import { BrowserRouter as Router } from 'react-router-dom';
// Import React-Bootstrap
import { Bootstrap } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>
);
