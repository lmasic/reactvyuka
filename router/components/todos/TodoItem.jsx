import PropTypes from 'prop-types';
import {
  useCallback, useContext, useEffect, useState,
} from 'react';
import CheckBox from './CheckBox';
import DataRow from './DataRow';
import { TodosContext } from '../../context';
import { register, unregister, updateTodo } from '../../utils/todo';
import Button from '../Button';

const TodoItem = ({ todo }) => {
  const { done, index, text } = todo;

  const [checked, setChecked] = useState(done);
  const [itemText, setItemText] = useState(text);
  const [update, setUpdate] = useState(!text);

  const { deleteFunction: deleteTodo } = useContext(TodosContext);

  useEffect(
    () => {
      register(index);

      return () => {
        unregister(index);
      };
    },
    [],
  );

  const onCheckedHandler = useCallback(
    () => {
      if (!itemText) {
        return;
      }

      const newChecked = !checked;
      setChecked(newChecked);
      setUpdate(false);
      updateTodo({ ...todo, done: newChecked, text: itemText });
    },
    [checked, itemText],
  );

  const onUpdateClickHander = useCallback(
    () => {
      if (!checked) {
        if (update) {
          updateTodo({ ...todo, done: checked, text: itemText });
        }

        setUpdate(!update);
      }
    },
    [checked, itemText, update],
  );

  return (
    <div className="todo-item">
      <CheckBox checked={checked} onChange={onCheckedHandler} />

      <DataRow
        text={itemText}
        strike={checked}
        updated={update}
        onChange={setItemText}
      />

      <Button variant="primary" disabled={!itemText || checked} onClick={onUpdateClickHander}>
        {update ? 'Hotovo' : 'Upravit'}
      </Button>

      <Button
        onClick={() => deleteTodo(index)}
      >
        Smazat
      </Button>
    </div>

  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    done: PropTypes.bool,
    text: PropTypes.string,
    index: PropTypes.number,
  }),
};

export default TodoItem;
