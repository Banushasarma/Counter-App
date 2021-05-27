import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Movies from './components/movies';
import NotFound from './components/notFound';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieNavBar from './components/movieNavBar';
import MovieDetails from './components/movieDetails';
import './App.css';



class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

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


  render() {
    return (
      <React.Fragment>
        <MovieNavBar />
        <div className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>


        {/*<Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
         <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
        </main> */}
      </React.Fragment >
    );
  }
}

export default App;
