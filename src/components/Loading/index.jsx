import React from 'react';

import './loading.css';

const Loading = () => {
  return (
    <div className="container">
      <div className="loading">
        <p>Carregando...</p>
        <img src="/assets/images/icons/loading.gif" alt="Loading" />
      </div>
    </div>
  );
};

export default Loading;
