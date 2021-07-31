import React, { Component } from "react";
import MoviList from "./MovieList";
import MovieRow from "./MovieRow";

class MoviePage extends Component {
  render() {
    return (
      <div>
        <MoviList />
        <MovieRow />
      </div>
    );
  }
}

export default MoviePage;
