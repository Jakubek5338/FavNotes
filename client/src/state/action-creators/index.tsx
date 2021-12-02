import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const add = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD,
      payload: value,
    });
  };
};

export const subtract = (value: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SUBTRACT,
      payload: value,
    });
  };
};

export const reset = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.RESET,
    });
  };
};

export const addtodo = (value: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADDTODO,
      payload: value,
    });
  };
};

export const removetodo = (value: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVETODO,
      payload: value,
    });
  };
};
