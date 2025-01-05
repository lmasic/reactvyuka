const ls = localStorage;

export const getTodos = () => {
  const jsonTodos = ls.getItem('todos');

  let todos = [];
  if (jsonTodos) {
    todos = JSON.parse(decodeURIComponent(jsonTodos));
  }

  return todos;
};

const saveTodos = (todos) => {
  ls.setItem('todos', encodeURIComponent(JSON.stringify(todos)));
};

export const updateTodo = (updatedTodo) => {
  const todos = getTodos();
  const todoIndex = todos.findIndex((todo) => todo.index === updatedTodo.index);
  todos[todoIndex] = updatedTodo;
  saveTodos(todos);
};

export const addTodo = () => {
  const todos = getTodos();
  const newIndex = todos.reduce((index, todo) => {
    if (todo.index > index) {
      return todo.index;
    }
    return index;
  }, 0);

  todos.push({
    index: newIndex + 1,
    text: '',
    done: false,
  });

  saveTodos(todos);
};

export const deleteTodo = (index) => {
  const todos = getTodos()
    .filter((todo) => todo.index !== index);

  saveTodos(todos);
};

// abychom viděli načtené komponenty v životním cyklu
export const register = (index) => {
  ls.setItem(`item-${index}`, 'registered');
};

export const unregister = (index) => {
  ls.removeItem(`item-${index}`);
};
