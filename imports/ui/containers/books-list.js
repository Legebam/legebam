import { BooksList } from '../components/books-list.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data';


function removeBookMutation(userId, bookId) {
  return {
    mutation: gql`
    mutation removeBook($userId: String!, $bookId: String!) {
      removeBook(userId: $userId, bookId: $bookId) {
        _id
      }
    }`,
    variables: {
      userId,
      bookId,
    },
  };
}

function updateBookMutation(userId, bookId, title) {
  return {
    mutation: gql`
    mutation updateBook($userId: String!, $bookId: String!, $title: String) {
      updateBook(
        userId: $userId,
        bookId: $bookId,
        title: $title
      ) {
        _id
      }
    }`,
    variables: {
      userId,
      bookId,
      title,
    },
  };
}

function mapQueriesToProps({ ownProps, state }) {
  return {
    data: {
      query: gql`
        query getBooks($limit: Int!) {
          books(limit: $limit) {
            _id
            title
          }
        }
      `,
      variables: {
        limit: 0,
      },
    },
  };
}

function mapMutationsToProps({ ownProps, state }) {
  if (ownProps.userId) {
    return {
      updateBook: updateBookMutation,
      removeBook: removeBookMutation,
    };
  }
}

const BooksListWithData = connect({
  mapQueriesToProps,
  mapMutationsToProps,
})(BooksList);

// This container brings in Tracker-enabled Meteor data
const BooksListWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId(),
  };
}, BooksListWithData);

export default BooksListWithUserId;

