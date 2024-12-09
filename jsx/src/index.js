// 1. import react and react-dom lib
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

// 2. Get Root reference

const el = document.getElementById('root')

// 3. Tell React to take control of the element
const root = ReactDOM.createRoot(el);


// 4. show the component
root.render(<App />);