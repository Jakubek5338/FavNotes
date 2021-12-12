import React, { useEffect } from 'react';
import ToDoCard from '../components/atoms/ToDoCard/ToDoCard';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

function ToDo() {
  const dispatch = useDispatch();
  const { fetchItems } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetchItems('todos');
  });
  return (
    <div>
      <ToDoCard />
    </div>
  );
}

export default ToDo;
