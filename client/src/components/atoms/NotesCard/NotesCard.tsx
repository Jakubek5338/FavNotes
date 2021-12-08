import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../state';

const Notes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.notes);
  const { addnote, removenote } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div>
        <div>
          {state.notes.map(({ title, body }) => (
            <div key={title}>
              <h1>{title}</h1>
              <h2>{body}</h2>
              <button onClick={() => removenote(title)}>REMOVE</button>
            </div>
          ))}
          <Formik
            initialValues={{
              title: '',
              body: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              addnote(values.title, values.body);
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
