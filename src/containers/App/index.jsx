import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Footer, TopBar, ProductDetail, ShoppingBag } from '../../components';
import { Home } from '../';

const App = () => {
  return (
    <>
      <TopBar />
      <main className="main-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={ProductDetail} />
          <Route path="/shopping-bag" component={ShoppingBag} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
