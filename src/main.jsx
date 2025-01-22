import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './index.css'; // Custom CSS (if any)

import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx'; // Import your main app component

// Render the app into the root element with React Strict Mode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
