import React from 'react';

import { Product, Loading } from '..';

const Home = ({ products }) => {
  return (
    <div className="container">
      {products.length > 1 ? (
        products.map((product, idx) => <Product key={idx} product={product} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
