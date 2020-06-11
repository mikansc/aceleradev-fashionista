import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer, TopBar } from '../../components';

import ProductGrid from '../ProductGrid';
import BagContainer from '../BagContainer';
import ProductContainer from '../ProductContainer';

const App = () => {
  return (
    <>
      <TopBar />
      <main className="main-content">
        <Switch>
          <Route exact path="/" component={ProductGrid} />
          <Route exact path="/product/:id" component={ProductContainer} />
          <Route path="/shopping-bag" component={BagContainer} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
