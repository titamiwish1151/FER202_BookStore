import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function BookDetailPage() {
  const { id } = useParams();

  return (
    <Container className="mt-4">
      <h2>Book Detail - ID: {id}</h2>
      <p>This is where detailed information about the book will appear.</p>
    </Container>
  );
}

export default BookDetailPage;