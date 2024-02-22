import React from 'react';

import { styled } from '@linaria/react';

const SearchContainer = styled.div`
    position: relative;
    width: 300px; /* Adjust as needed */
`;

const SearchInput = styled.input`
    width: calc(100% - 100px); /* Adjust button width */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    outline: none;

`;

const SearchButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 100px; /* Adjust as needed */
    height: 100%;
    padding: 10px;
    background-color: #007bff; /* Button color */
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #0056b3; /* Button color on hover */
    }
`;

export default function SearchBar() {
  return (
      <SearchContainer>
          <SearchInput type="text" id="searchInput" placeholder="Search..."/>
          <SearchButton type="button" id="searchButton" >Search</SearchButton>
      </SearchContainer>
  );
}