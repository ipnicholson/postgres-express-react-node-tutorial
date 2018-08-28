// All our routes go here

const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Welcome to the Todos API!",
  }));

  // Run todosController.create, extract the posted data, and create a todo from it
  app.post('/api/todos', todosController.create);

  // GET on api/todos => list all todos
  app.get('/api/todos', todosController.list);

  app.post('/api/todos/:todoId/items', todoItemsController.create);
};