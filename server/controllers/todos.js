const Todo = require('../models').Todo;

// Create a new todo, and if successful, return it. If it encounters an error, it returns the error instead
module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};