import _ from "lodash";
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MovieTable from "./movieTable";
import { paginate } from "../Utils/paginate";
import SearchBox from "./common/searchBox";

class Movies extends Component {
  state = {
    movies: [],
    generes: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenere: {},
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const generes = [{ _id: "", name: "All Generes" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      generes,
    });
  }

  handleDelete = (_id) => {
    this.setState({
      movies: this.state.movies.filter((movie) => movie._id !== _id),
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies,
    });
  };

  handlePageChanged = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  handleGenereSelect = (item) => {
    this.setState({
      selectedGenere: item,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenere: null, currentPage: 1 });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenere,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = allMovies;

    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenere && selectedGenere._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenere._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There no movie records in database.</p>;

    const { totalCount, data } = this.getPageData();

    return (
      <div className="row m-3">
        <div className="col-2">
          <ListGroup
            listItems={this.state.generes}
            selectedGenere={this.state.selectedGenere}
            onItemSelect={this.handleGenereSelect}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-primary mb-2"
            onClick={() => {
              this.props.history.push("/movies/new");
            }}
          >
            New Movie
          </button>
          <p>Showing {totalCount} movies in the database</p>
          <SearchBox onChange={this.handleSearch} value={searchQuery} />
          <MovieTable
            movies={data}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={this.handlePageChanged}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
