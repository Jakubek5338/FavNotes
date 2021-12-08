import { Action } from '../actions';

const initialState = {
  notes: [
    {
      title: 'Add Sides',
      body: 'Simple note',
    },
  ],
};

const SidesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'addnote':
      return {
        ...state,
        notes: [...state.notes, { title: action.title, body: action.body }],
      };
    case 'removenote':
      return {
        ...state,
        notes: [...state.notes.filter((item) => item.title !== action.payload)],
      };
    default:
      return state;
  }
};

export default SidesReducer;
