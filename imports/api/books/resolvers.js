import { Books } from './books';

const booksResolvers = {
  Query: {
    async books(root, { limit }) {
      return Books.find({}, { limit: limit }).fetch();
    },
    async findBookByTitle(root, { title }) {
      return Books.findOne({ title: title });
    },
    async findBookById(root, { id }) {
      return Books.findOne({ _id: id });
    },
  },
  Mutation: {
    async insertBook(root, { userId, title }, context) {
      if (context.user._id === userId) {
        return Books.insert({ title });
      }
    },
    async updateBook(root, { userId, bookId, title }, context) {
      if (context.user._id === userId) {
        return Books.update(bookId, { $set: { title } });
      }
    },
    async removeBook(root, { userId, bookId }, context) {
      if (context.user._id === userId) {
        return Books.remove(bookId);
      }
    }
  }
};

export default booksResolvers;
