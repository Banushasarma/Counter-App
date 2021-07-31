import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { ToastContainer } from "react-toastify";

import Movies from './components/movies';
import NotFound from './components/notFound';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieNavBar from './components/movieNavBar';
import MovieDetails from './components/movieDetails';
import LoginForm from './components/loginForm';
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from './components/registerForm';
import httpDemo from './components/httpDemo';
import Logout from './components/common/logout';
import auth from "./services/authService";

import './App.css';
import ProtectedRoute from './components/common/protectedRoute';
import MovieHOC from './hoc/MovieHOC';
import Counter from './hooks/counter';
import Users from './hooks/users';
import MoviePage from './context/MoviePage';

import UserContext from './context/userContext';
import Login from './context/Login';



class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    currentUser: null
  };

  componentDidMount() {
    const user = auth.getCurrentUser()
    this.setState({ user })
  }

  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter(
        (counter) => counter.id !== counterId
      ),
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({
      counters,
    });
  };

  handleReset = () => { };

  handleLoggedIn = (username) => {
    console.log("Getting the user" + username);
    const user = { name: "Mosh" }
    this.setState({ currentUser: user })
  }

  render() {
    const { user } = this.state
    return (
      <UserContext.Provider value={{ currentUser: this.state.currentUser, onLoggedIn: this.handleLoggedIn }}>


        <React.Fragment>
          {/* <ToastContainer /> */}
          {/* <MovieNavBar user={user} />
        <div className="container">
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/httpdemo" component={httpDemo} />
            <Route path="/login" component={LoginForm} />
            <ProtectedRoute path="/movies/:id" component={MovieDetails} />
            <Route path="/movies"
              render={props => <Movies {...props} user={user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div> */}
          {/* <MovieHOC /> */}
          {/* <Counter /> */}
          {/* <Users /> */}
          <MoviePage />
          <Login />

          {/*<Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
         <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
        </main> */}
        </React.Fragment >
      </UserContext.Provider>
    );
  }
}

export default App;
