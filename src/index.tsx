import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExampleClass from './Example_Class/ExampleClass';
import ExampleFunctional from './Example_Functional/ExampleFunctional';
import App1 from './CountString/App1';
import Apps from './Apps';
import App2 from './PackageLibrary/App2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Apps/>  */}
    <ExampleClass />
    <ExampleFunctional/>
    <App1/>
    <App2/>
  </React.StrictMode>
);

reportWebVitals();
