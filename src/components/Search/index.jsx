import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { searchProduct } from '../../redux/actions';
import SearchResultItem from './SearchResultItem';

const Search = () => {
  const { searchResult, searchQuery } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  function handleSearch(event) {
    let query = event.target.value;
    dispatch(searchProduct(query));
  }

  return (
    <div className="search">
      <div className="container">
        <h2 className="shopping-cart__title">Buscar</h2>
        <input
          type="text"
          className="search__input"
          placeholder="Digite sua busca"
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
        />
        {searchResult.length <= 0 ? (
          <div className="container">Nenhum item encontrado</div>
        ) : (
          searchResult.map((item) => <SearchResultItem productData={item} />)
        )}
      </div>
    </div>
  );
};

export default Search;
