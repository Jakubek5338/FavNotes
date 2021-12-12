import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../state';

const Notes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.notes);
  const { additem, removeitem } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div>
        <div>
          {state.notes.map(({ title, body, _id }) => (
            <div key={_id}>
              <h1>{title}</h1>
              <h2>{body}</h2>
              <button onClick={() => removeitem(_id, 'notes')}>REMOVE</button>
            </div>
          ))}
          <Formik
            initialValues={{
              title: '',
              body: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              additem(values.title, values.body, 'notes');
              resetForm();
            }}
          >
            <Form>
              <Field type="text" id="title" name="title" placeholder="title" />
              <Field type="text" id="body" name="body" placeholder="body" />
              <button type="submit">Add</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Notes;
