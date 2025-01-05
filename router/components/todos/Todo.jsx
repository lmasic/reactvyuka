import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import TodoList from './TodoList';
import { TodosContext } from '../../context';
import { addTodo, deleteTodo, getTodos } from '../../utils/todo';
import Button from '../Button';

const Todo = () => {
  const [items, setItems] = useState([]);

  useEffect(
    () => setItems(getTodos()),
    [],
  );

  const deleteHandler = useCallback(
    (index) => {
      deleteTodo(index);
      setItems(getTodos());
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      deleteFunction: deleteHandler,
    }),
    [deleteHandler],
  );

  const { Provider } = TodosContext;

  return (
    <Provider value={contextValue}>
      <div className="row">
        <TodoList items={items} />
      </div>

      <div className="row">
        <Button
          variant="secondary"
          onClick={() => {
            addTodo();
            setItems(getTodos());
          }}
        >
          Přidat úkol
        </Button>
      </div>
    </Provider>
  );
};

export default Todo;
