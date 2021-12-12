import { Action } from '../actions';

const initialState = {
  sides: [
    {
      title: '',
    },
  ],
};

const SidesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'addside':
      return {
        ...state,
        sides: [...state.sides, { title: action.payload }],
      };
    case 'removeside':
      return {
        ...state,
        sides: [...state.sides.filter((item) => item.title !== action.payload)],
      };
    default:
      return state;
  }
};

export default SidesReducer;
