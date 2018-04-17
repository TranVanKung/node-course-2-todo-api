const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({ _id: '5ad5c900e6d4f390e06d9136' }).then((todo) => {
//
// });

Todo.findByIdAndRemove('5ad5c900e6d4f390e06d9136').then((todo) => {
  console.log(todo);
});
