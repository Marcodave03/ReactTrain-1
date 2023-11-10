import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExampleClass from './Example_Class/ExampleClass';
import ExampleFunctional from './Example_Functional/ExampleFunctional';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ExampleClass />
    <ExampleFunctional/>
  </React.StrictMode>
);

reportWebVitals();
