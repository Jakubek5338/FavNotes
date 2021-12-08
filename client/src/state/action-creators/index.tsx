import { ActionType } from '../action-types';
import { Dispatch } from 'redux';

export const addnote = (title: string, body: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADDNOTE,
      title,
      body,
    });
  };
};

export const removenote = (value: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVENOTE,
      payload: value,
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

export const addside = (value: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADDSIDE,
      payload: value,
    });
  };
};

export const removeside = (value: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVESIDE,
      payload: value,
    });
  };
};
