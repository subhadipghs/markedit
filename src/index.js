import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DivideExampleVertical from './component/editor';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);



ReactDOM.render(
    <App>
    	<DivideExampleVertical/>
    </App>,
  document.getElementById('root')
);