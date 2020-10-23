import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './file.css';

function HelloReact(props) {
  return <h1 className="HelloReact">{props}</h1>;
}

const element = HelloReact("Hello React!");

ReactDOM.render(
  element,
  document.getElementById('root')
);

serviceWorker.unregister();
