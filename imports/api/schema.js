import booksSchema from './books/schema.js';
import usersSchema from './users/schema.js';

const rootSchema = [`
  type Query {
    books(limit: Int!): [Book],
    findBookById(id: String!): Book!,
    findBookByTitle(title: String!): Book!,
    user(id: String!): User
  }
  type Mutation {
    insertBook(userId: String!, title: String): Book
    updateBook(userId: String!, bookId: String!, title: String): Book
    removeBook(userId: String!, bookId: String!): Book
  }
  schema {
    query: Query,
    mutation: Mutation
  }
`];

const schemas = [
  ...rootSchema,
  ...documentsSchema,
  ...usersSchema
];

export default schemas;
