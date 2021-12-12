import { Action } from '../actions';

const initialState = {
  notes: [
    {
      creator: '',
      title: '',
      body: '',
      type: '',
      _id: '',
      _v: '',
    },
  ],
};

const SidesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'addnote':
      return {
        ...state,
        notes: [
          ...state.notes,
          { _id: action._id, title: action.title, body: action.body, creator: 'osdn', type: 'sdvk', _v: '0' },
        ],
      };
    case 'removenote':
      return {
        ...state,
        notes: [...state.notes.filter((item) => item._id !== action.id)],
      };
    case 'fetchitems':
      return {
        ...state,
        notes: action.items,
      };
    default:
      return state;
  }
};

export default SidesReducer;
