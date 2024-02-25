import React, {useState} from 'react';
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

  const handleSearch = async () => {
    const results = await searchBooks(searchTerm); // use the imported function
    setBooks(results);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
