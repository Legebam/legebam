import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import {
  dispatchUpdateBookMutation,
  dispatchRemoveBookMutation
} from '/imports/ui/actions/booksMutations';

const handleUpdateBook = (userId, bookId, mutation, refetch, event) => {
  const title = event.target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    dispatchUpdateBookMutation(
      userId,
      bookId,
      title,
      mutation,
      refetch
    );
  }
};

const handleRemoveBook = (userId, bookId, mutation, refetch, event) => {
  event.preventDefault();
  // this should be replaced with a styled solution so for now we will
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    dispatchRemoveBookMutation(
      userId,
      bookId,
      mutation,
      refetch
    )
  }
};

export const Book = ({ userId, book, data, mutations }) => (
  <ListGroupItem key={ book._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <FormControl
          type="text"
          standalone
          defaultValue={ book.title }
          onKeyUp={
            handleUpdateBook.bind(this,
              userId,
              book && book._id,
              mutations && mutations.updateBook,
              data && data.refetch
            )
          }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={
            handleRemoveBook.bind(this,
              userId,
              book && book._id,
              mutations && mutations.removeBook,
              data && data.refetch
            )
          }
        >
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);

Book.propTypes = {
  book: React.PropTypes.object,
  data: React.PropTypes.object,
  userId: React.PropTypes.string,
  mutations: React.PropTypes.object,
};
