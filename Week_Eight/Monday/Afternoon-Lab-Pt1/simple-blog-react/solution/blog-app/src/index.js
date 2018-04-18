import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

const author = "Alex W.";
const title  = "Aliens are a thing, I think.";
const comments = ["uh, yuh. totes.", "grill, you cray."];

ReactDOM.render(<Post title={title}author={author} comments={comments} />, document.getElementById('root'));
registerServiceWorker();
