import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (_id) => {
    this.setState({
      movies: this.state.movies.filter((movie) => movie._id !== _id),
    });
    //  this.state.movies.filter()
  };

  render() {
    if (this.state.movies.length === 0)
      return <p>There no movie records in database.</p>;
    else
      return (
        <div>
          <p>Showing {this.state.movies.length} movies in the database</p>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genere</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(movie._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        </div>
      );
  }
}

export default Movies;
