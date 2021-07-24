import React from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/cart/Cart'
import Default from './components/Default'
import Product from './components/Product'
import Modal from './components/Modal'
// import TestHooks from './components/TestHooks'
// import TestHooks2 from './components/TestHooks2'
import Test from './components/Test'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} ></Route>
        <Route path="/details" component={Details} ></Route>
        <Route path="/cart" component={Cart} ></Route>
        <Route path="/test" component={Test} ></Route>
        {/* <Route path="/testhooks" component={TestHooks} ></Route> */}
        {/* <Route path="/testhooks2" component={TestHooks2} ></Route> */}
        <Route component={Default} ></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
