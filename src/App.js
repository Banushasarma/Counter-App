import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/HomeComponent';
import Products from './components/products';
import ProductDetails from './components/productDetails';
import Posts from './components/posts';
import NotFound from './components/notFound';
import Dashboard from './components/admin/dashboard';


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
        <div className="content">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/posts/2021/05">Posts</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/products" render={(props) => <Products sortBy="Newest" {...this.props} />}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/productdetails/:id" component={ProductDetails}></Route>

            <Route path="/posts/:year?/:month?" component={Posts}></Route>

            <Redirect from="/messages" to="/posts" />


            <Route path="/admin" component={Dashboard}></Route>


            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={Home}></Route>
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
