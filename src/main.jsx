import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import DisplayAll from './components/displayAll';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayAll />
  </StrictMode>
);
