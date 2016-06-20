import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Book } from './book.js';

export const BooksList = ({ userId, data, mutations }) => {
  const { books } = data;
  return (
    books && books.length > 0
      ?
      <ListGroup className="books-list">
        {books.map((doc) => (
          <Book
            key={ doc._id }
            book={ doc }
            data={ data }
            mutations={ mutations }
            userId={ userId }
            refetch={ data && data.refetch }
          />
        ))}
      </ListGroup>
      :
      <Alert bsStyle="warning">No books yet.</Alert>
  );
};

BooksList.propTypes = {
  userId: React.PropTypes.string,
  data: React.PropTypes.object,
  mutations: React.PropTypes.object,
};
