import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from "./components/search-bar";
import Table from "./components/table";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Library!</h1>
        <SearchBar />
        <Table />
      </header>
    </div>
  );
}

export default App;
