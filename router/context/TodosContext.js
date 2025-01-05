import { createContext } from 'react';

const TodosContext = createContext({
  deleteFunction: () => { },
});

TodosContext.displayName = 'TodosContext';

export default TodosContext;
