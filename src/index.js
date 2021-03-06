import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import App from './App';
import React from 'react';
import './index.css';

ReactDOM.render(<App />, document.querySelector('#root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
