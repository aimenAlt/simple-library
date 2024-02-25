import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import './App.css';
import searchBooks from "./services/OpenLibraryService";

import SearchBar from "./components/search-bar";
import Table from "./components/table";
import Book from "./interfaces/book";

const AppContainer = styled.div`
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = async () => {
    const results = await searchBooks(searchTerm); // use the imported function
    setBooks(results);
  };

  const handleRealTimeSearch = () => {
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      handleSearch();
    }, 1500);
    setTimer(newTimer);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    handleRealTimeSearch();
  };

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return (
    <AppContainer className="App">
      <header className="App-header">
        <h1>Welcome to the Library!</h1>
      </header>
      <ContentContainer>
        <SearchBar value={searchTerm} onChange={handleChange} handleSearch={handleSearch} />
        <Table books={books} />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
