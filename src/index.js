import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test_Plan from './Test_Plan';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Test_Plan />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
