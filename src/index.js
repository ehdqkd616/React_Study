import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // App.js 안에 있는 App 클래스를 import
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // id 값이 root인 태그 안에 들어가게 된다.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
