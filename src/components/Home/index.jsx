import React from 'react';

import { Product, Loading } from '..';

const Home = ({ products }) => {
  console.log('Lista de prods:', products);
  return (
    <div className="container">
      {products ? (
        products.map((product, idx) => <Product key={idx} product={product} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
