const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId,
      })
      .then(todoItem => res.status(201).send(todoItem)) // HTTP status 201 means 'created'
      .catch(error => res.status(400).send(error)) // HTTP 400 is bad request
  },
}