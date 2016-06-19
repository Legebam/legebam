import { merge } from 'lodash';
import booksResolvers from './books/resolvers.js';
import usersResolvers from './users/resolvers.js';

const resolvers = merge(booksResolvers, usersResolvers);

export default resolvers;
