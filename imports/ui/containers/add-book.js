import { AddBook } from '../components/add-book.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data';

function insertBookMutation(userId, title) {
  return {
    mutation: gql`
    mutation insertBook($userId: String!, $title: String) {
      insertBook(
        userId: $userId,
        title: $title
      ) {
        _id
      }
    }`,
    variables: {
      userId,
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
      insertBook: insertBookMutation,
    };
  }
}

const AddBookWithData = connect({
  mapQueriesToProps,
  mapMutationsToProps,
})(AddBook);

// This container brings in Tracker-enabled Meteor data
const AddBookWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId(),
  };
}, AddBookWithData);

export default AddBookWithUserId;

