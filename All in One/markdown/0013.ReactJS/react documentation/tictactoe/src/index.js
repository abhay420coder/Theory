import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /* 
  StrictMode is a React Developer Tool primarily used for 
    highlighting possible problems in a web application. 
  It activates additional deprecation checks and warnings for its child components

  root.render(
    <App />
  ); // this will also works but with  <React.StrictMode> is best practice.
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const jsxElement = <h1>This is a JSX element</h1>
// const rootElement = document.getElementById('root')
// ReactDOM.render(jsxElement, document.getElementById('root'))
