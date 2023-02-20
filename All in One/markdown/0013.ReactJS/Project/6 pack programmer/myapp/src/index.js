import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// syntax to create rootElement 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( // here we will write that component which will we rendered(displayed) 
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 




/* 
root.render( // here we will write that component which will we rendered(displayed) 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render( // here we will write that component which will we rendered(displayed) 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


root.render(
  <React.StrictMode>
    <h1>welcome to React</h1>
  </React.StrictMode>
)
*/

