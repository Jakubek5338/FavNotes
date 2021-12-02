import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../state';

function Counter() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.notes);
  const { add, subtract, reset } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <div>{state}</div>
      <button onClick={() => add(5)}>Add</button>
      <button onClick={() => subtract(5)}>SUBTRACT</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Counter;
