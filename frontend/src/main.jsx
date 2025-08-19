import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css';               // Core
import 'primeicons/primeicons.css';                             // Icons
import 'primeflex/primeflex.css';                              // Layout (optional)
import App from './App.jsx'
import { AuthProvider } from '../context/AuthContext.jsx';
import { ProjectProvider } from '../context/projectContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </AuthProvider>
  </StrictMode>,
)
