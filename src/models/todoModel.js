// In-memory storage
let todos = [];
let nextId = 1;

export const TodoModel = {
  findAll: () => {
    return todos;
  },

  findById: (id) => {
    return todos.find((todo) => todo.id === parseInt(id));
  },

  create: (todoData) => {
    const newTodo = {
      id: nextId++,
      ...todoData,
      completed: false, // Default status
    };
    todos.push(newTodo);
    return newTodo;
  },

  update: (id, todoData) => {
    const index = todos.findIndex((todo) => todo.id === parseInt(id));
    if (index !== -1) {
      todos[index] = { ...todos[index], ...todoData };
      return todos[index];
    }
    return null;
  },

  delete: (id) => {
    const index = todos.findIndex((todo) => todo.id === parseInt(id));
    if (index !== -1) {
      todos.splice(index, 1);
      return true;
    }
    return false;
  },
};
