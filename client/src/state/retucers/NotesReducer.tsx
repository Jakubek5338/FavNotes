import { Action } from '../actions';

const initialState = 0;

const NotesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'add':
      return state + action.payload;
    case 'subtract':
      return state - action.payload;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

export default NotesReducer;
