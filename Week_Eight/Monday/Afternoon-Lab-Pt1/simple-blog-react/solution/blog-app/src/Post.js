import React, { Component } from 'react';
import logo from './logo.svg';
import './Post.css';
import Comment from './Comment.js'

class Post extends Component {
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      body: "Have you ever seen an alien? I have. Or maybe it was something else... something from earth. I don't really know, but whatever it was, it was cool."
    }
    this.edit = this.edit.bind(this);

  }

  edit (e) {
    e.preventDefault();
    let body = prompt("Enter new body");
    this.setState({
      body: body
    })
  }
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <img src={logo} className="Post-logo" alt="logo" />
          <h1 className="Post-title">{this.props.title}</h1>
        </header>
        <small>by {this.props.author}</small>
        <p className="Post-intro">
          {this.state.body}
        </p>
        <button onClick={this.edit}>
          Edit
        </button>
        <h3>Comments:</h3>
        <ul>
          {this.props.comments.map(function(comment) {
             return <Comment body={comment}></Comment>
          })}
        </ul> 
      </div>
    );
  }
}

export default Post;
