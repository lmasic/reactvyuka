import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items = [] }) => {
  const [todos, setTodos] = useState([]);

  useEffect(
    () => setTodos(items),
    [items],
  );

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.index} />
      ))}
    </div>

  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool,
    text: PropTypes.string,
    index: PropTypes.number,
  })),
};

export default TodoList;
