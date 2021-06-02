import React, { Component } from "react";
import httpService from "../services/httpService";
import config from "../config.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class httpDemo extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await httpService.get(config.apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "aaaa", body: "bbb" };
    const { data: post } = await httpService.post(config.apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    const { data } = await httpService.put(
      config.apiEndpoint + "/" + post.id,
      post
    );

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
    console.log(data);
  };

  handleDelete = async (post) => {
    const orignalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await httpService.delete(`aaa${config.apiEndpoint}/${post.id}`);
    } catch (ex) {
      console.log("HANDLE DELETE CATCH BLOCK");
      if (ex.response && ex.response.status === 404)
        alert("This post is alredy been deleted.");

      this.setState({ posts: orignalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary mb-2" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => this.handleUpdate(p)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(p)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default httpDemo;
