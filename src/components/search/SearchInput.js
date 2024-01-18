// SearchPage.js

import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const SearchResult = styled.div`
  margin-top: 20px;
`;

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Implemente a lógica de busca aqui (pode chamar uma API, por exemplo)
    // Atualize searchResults com os resultados.
    // Por enquanto, vamos simular alguns resultados fictícios.

    const fakeResults = ['User1', 'User2', 'User3'];
    setSearchResults(fakeResults);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        className="single-input"
        type="text"
        placeholder="O que você vai tocar hoje?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress} // Adiciona o manipulador de evento para Enter
      />
      
      {/*<button className="genric-btn primary radius" onClick={handleSearch}>
        <i className="fa fa-search" aria-hidden="true" />
  </button>*/}

      <SearchResult>
        {searchResults.map((result) => (
          <div key={result}>{result}</div>
        ))}
      </SearchResult>
    </SearchContainer>
  );
};

export default SearchPage;
