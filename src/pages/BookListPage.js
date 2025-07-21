import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookCard from '../components/BookCard';

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', image: 'https://via.placeholder.com/200' },
  { id: 2, title: 'Refactoring', author: 'Martin Fowler', image: 'https://via.placeholder.com/200' },
  { id: 3, title: 'JS: The Good Parts', author: 'Douglas Crockford', image: 'https://via.placeholder.com/200' },
];

function BookListPage() {
  return (
    <Container className="mt-4">
      <h2>Book Collection</h2>
      <Row>
        {books.map(book => (
          <Col md={4} key={book.id} className="mb-4">
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookListPage;