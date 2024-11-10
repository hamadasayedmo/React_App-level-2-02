import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { HelmetProvider } from 'react-helmet-async';

import {ThemeProvider} from "./context/ContextData";

import * as serviceWorkerRegistration from './serviceWorkerRegistration'; 





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
 
