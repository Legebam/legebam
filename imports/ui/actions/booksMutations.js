import { Bert } from 'meteor/themeteorchef:bert';

export function dispatchInsertBookMutation(userId, title, mutation, refetch) {
  return mutation(userId, title).then((result) => {
    const { data, errors } = result;

    if (data) Bert.alert('Book inserted!', 'success');
    if (errors) Bert.alert('Something bad happened!', 'danger');
    if (refetch) return refetch();
  }).catch((error) => {
    // do something with error
  });
}

export function dispatchUpdateBookMutation(userId, bookId, title, mutation, refetch) {
  console.log(bookId);
  return mutation(userId, bookId, title).then((result) => {
    const { data, errors } = result;

    if (data) Bert.alert('Book updated!', 'success');
    if (errors) Bert.alert('Something bad happened!', 'danger');
    if (refetch) return refetch();
  }).catch((error) => {
    // do something with error
  });
}

export function dispatchRemoveBookMutation(userId, bookId, mutation, refetch) {
  return mutation(userId, bookId).then((result) => {
    const { data, errors } = result;

    if (data) Bert.alert('Book removed!', 'success');
    if (errors) Bert.alert('Something bad happened!', 'danger');
    if (refetch) return refetch();
  }).catch((error) => {
    // do something with error
  });
}
