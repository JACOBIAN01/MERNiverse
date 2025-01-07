import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Hook from './components/Hooks.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Hook/>
  </StrictMode>
);
