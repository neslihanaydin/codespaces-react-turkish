import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  //  <React.StrictMode> geliştirme sırasında potansiyel sorunları tespit etme
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)