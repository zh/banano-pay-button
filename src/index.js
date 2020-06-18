import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var button = document.getElementById('banano-button');
ReactDOM.render(<App {...button.dataset} />, button);
