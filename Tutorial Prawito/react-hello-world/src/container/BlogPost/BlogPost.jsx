import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  getPostAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  handleRemove = (data) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${data}`)
      .then((result) => {
        if (result.status === 200) {
          this.setState({
            post: this.state.post.filter((post) => post.id !== data),
          });
        }
      });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <header>
          {this.state.post.map((post) => {
            return (
              <Post key={post.id} data={post} remove={this.handleRemove} />
            );
          })}
        </header>
      </Fragment>
    );
  }
}

export default BlogPost;
