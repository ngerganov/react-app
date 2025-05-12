import React, { useState, useCallback } from 'react';
import _ from 'lodash';

const SearchInputWithDebounce = () => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = useCallback(
    _.debounce((value) => {
      setSearchResult(value);
    }, 300),
    []
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Введите запрос для поиска"
      />
      <p>Результат поиска: {searchResult}</p>
    </div>
  );
};
export default SearchInputWithDebounce;