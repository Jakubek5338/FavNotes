import { Action } from '../actions';

const initialState = {
  todos: [
    {
      title: 'Add ToDoS',
    },
  ],
};

const ToDoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'addtodo':
      return {
        ...state,
        todos: [...state.todos, { title: action.payload }],
      };
    case 'removetodo':
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.title !== action.payload)],
      };
    default:
      return state;
  }
};

export default ToDoReducer;
