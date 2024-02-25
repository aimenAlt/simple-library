import React from 'react';
import styled from 'styled-components';
import TableRow from "./table-row";
import Book from "../../interfaces/book";

// Define styled components for table elements
const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 500px;
    border-radius: 1rem;
    //overflow-y: auto; // Enable vertical scrolling
    overflow-x: hidden; // Hide horizontal scrollbar
`;

const BookTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #f3f3f3;
`;

const Th = styled.th`
    background-color: #3761f6;
    color: white;
    padding: 10px;
    text-align: left;
    position: sticky; 
    top: 0;
    z-index: 10; 
`;

const Thead = styled.thead`
    // Additional styles for the table header if needed
`;

const Tbody = styled.tbody`
    overflow-y: auto;
    tr:nth-child(even) {
        background-color: #bfcdff;
    }
`;

const Tr = styled.tr`
    // Additional styles for the table row if needed
`;

interface TableProps {
  books: Book[];
}

const Table: React.FC<TableProps> = ({ books }) => {
  return (
    <TableContainer id='table-container'>
      <BookTable id='book-table'>
        <Thead>
          <Tr>
            <Th>Book Title</Th>
            <Th>Author's Name</Th>
            <Th>Publishing Year</Th>
            <Th>ISBN Number</Th>
            <Th>Page Count</Th>
          </Tr>
        </Thead>
        <Tbody>
          {books.map((book, index) => (<TableRow key={index} book={book} />))}
        </Tbody>
      </BookTable>
    </TableContainer>
);
};
export default Table;

