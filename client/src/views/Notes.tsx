import React, { useEffect } from 'react';
import NotesCard from '../components/atoms/NotesCard/NotesCard';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

function Notes() {
  const dispatch = useDispatch();
  const { fetchItems } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetchItems('notes');
  });
  return (
    <div>
      <NotesCard />
    </div>
  );
}

export default Notes;
