import React from "react";
import styled  from "styled-components";
import Book from "../../interfaces/book";

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd; // Adjust the color as needed
  text-align: left;

    // Add more styles as needed
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2; // Adjust the color for even rows
  }
`;

interface TableRowProps {
  book: Book;
}

const TableRow: React.FC<TableRowProps> = ({ book }) => {
  return (
    <Tr>
      <Td>{book.title}</Td>
      <Td>{book.authors}</Td>
      <Td>{book.firstPublishedYear}</Td>
      <Td>{book.isbn[0]}</Td>
      <Td>{book.numberOfPages}</Td>
    </Tr>
  );

}

export default TableRow;