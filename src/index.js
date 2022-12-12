import React from 'react';
import { createRoot } from 'react-dom/client';

// import App from './Bar.js';
// import App from './Scatter.js';
// import App from './Genomic.js';
import App from './Heatmap.js';
 
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App />);




