import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Footer, TopBar } from '../../components';
import { Home, ProductDetail, ShoppingBag } from '../';

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
