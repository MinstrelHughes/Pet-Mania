'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const name = req.body.name;
  const PID = req.body.PID;
  const DOB = req.body.DOB;
  const breed = req.body.breed;
  const kind =req.body.kind;
  const gender = req.body.gender;
  // console.log("todos add name = "+ name);
  // console.log("req body.name = "+ req.body.name);
  Promise.resolve()
  .then(() => {
    return addTodo(name,PID,DOB,breed,kind,gender);
  })
  .then((data) => {
    res.status(200).send({
          message: 'you have successfully logged in'
          data: data
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function addTodo(name,PID,DOB,breed,kind,gender) {
  return todoDao.signup_user({
    name: name,
    PID: PID,
    DOB: DOB,
    breed: breed,
    kind: kind,
    gender: gender
  })
}
