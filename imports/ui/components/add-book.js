import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { dispatchInsertBookMutation } from '/imports/ui/actions/booksMutations';

const handleInsertBook = (userId, mutation, refetch, event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    dispatchInsertBookMutation(userId, title, mutation, refetch);
  }
};

export const AddBook = ({userId, data, mutations}) => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertBook.bind(this, userId, mutations && mutations.insertBook, data && data.refetch) }
      placeholder="Type a book title and press enter..."
    />
  </FormGroup>
);
