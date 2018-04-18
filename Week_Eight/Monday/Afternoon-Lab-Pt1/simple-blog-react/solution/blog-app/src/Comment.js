import React, { Component } from 'react';
import logo from './logo.svg';
import './Comment.css';

class Comment extends Component {
  render() {
    return (
        <li>
          {this.props.body}
        </li>
    );
  }
}

export default Comment;
