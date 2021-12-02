import { combineReducers } from 'redux';
import notesReducer from './NotesReducer';
import todoReducer from './ToDoReducer';

const reducers = combineReducers({
  notes: notesReducer,
  todo: todoReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
