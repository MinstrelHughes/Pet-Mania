'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');


module.exports = (req, res) => {
  const todoId = req.params.todo_id;
  console.log("the todo id is " + todoId);
  Promise.resolve()
  .then(() => {
    return getTodo(todoId);
  })
  .then((data) => {
    res.send({
      data: data,
      status: {
        code: 200,
        msg: 'ok'
      }
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function getTodo(todoId) {
  console.log("the todo id is " + todoId);
  return todoDao.single({
    todoId: todoId
  });
}
