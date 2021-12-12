import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import axios from 'axios';

export const addnote = (title: string, body: string) => {
  const type = 'note';
  const creator = 'Jalub';
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/api/note', {
        type,
        creator,
        title,
        body,
      });
      const id = response.data._id;
      dispatch({
        type: ActionType.ADDNOTE,
        id,
        title,
        body,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const removenote = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/api/note/${id}`);
      dispatch({
        type: ActionType.REMOVENOTE,
        id,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchItems = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('http://localhost:8080/api/note');
      const items = response.data;
      dispatch({
        type: ActionType.FETCHITEMS,
        items,
      });
      console.log(items);
    } catch (err) {
      console.log(err);
    }
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
