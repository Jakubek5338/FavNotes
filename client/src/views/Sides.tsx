import React, { useEffect } from 'react';
import SidesCard from '../components/atoms/SidesCard/SidesCard';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

function Sides() {
  const dispatch = useDispatch();
  const { fetchItems } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetchItems('sides');
  });
  return (
    <div>
      <SidesCard />
    </div>
  );
}

export default Sides;
