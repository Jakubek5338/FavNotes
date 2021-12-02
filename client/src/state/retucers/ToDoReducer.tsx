import { Action } from '../actions';

const initialState = {
  todo: [
    {
      title: 'Zrobić Zakupy',
    },
  ],
};

const ToDoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'addtodo':
      return {
        ...state,
        todo: [...state.todo, { title: action.payload }],
      };
    case 'removetodo':
      return {
        ...state,
        todo: [...state.todo.filter((item) => item.title !== action.payload)],
      };
    default:
      return state;
  }
};

export default ToDoReducer;
