import React, { useState, useEffect } from 'react';

import { Product, Loading } from '../../components/';

import mock from '../../assets/mock.json';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mock);
    }, 1000);
  }, []);

  return (
    <div className="container">
      {products.length >= 1 ? (
        products.map((product, idx) => <Product key={idx} product={product} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
