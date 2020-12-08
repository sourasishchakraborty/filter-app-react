import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './style.css';

/*let element = React.createElement(
    'div',
    null, 
    //'Hello World'
    React.createElement('h1', null, 'Hello World')
    );
*/

// JSX

//let element = <div><h1><span>Hello World</span></h1></div>

ReactDOM.render(<App/> , document.querySelector('#root'));