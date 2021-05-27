import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

class MovieTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.onLike(movie)}
          movie={movie}
        />
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie._id)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <div>
        <Table
          data={movies}
          sortColumn={sortColumn}
          columns={this.columns}
          onSort={onSort}
        />
      </div>
    );
  }
}

export default MovieTable;
