import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchData } from './redux/actions';

import ProductGrid from './containers/ProductGrid';
import BagContainer from './containers/BagContainer';
import ProductContainer from './containers/ProductContainer';
import TopBarContainer from './containers/TopBarContainer';

const App = () => {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Router>
      <TopBarContainer />
      <main className="main-content">
        <Switch>
          <Route exact path="/" component={ProductGrid} />
          <Route exact path="/product/:id" component={ProductContainer} />
          <Route path="/shopping-bag" component={BagContainer} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
