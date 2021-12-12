import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../state';

function ToDo() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.todos);
  const { additem, removeitem } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div>
        <div>
          {state.todos.map(({ title, _id }) => (
            <div key={_id}>
              <h1>{title}</h1>
              <button onClick={() => removeitem(_id, 'todos')}>REMOVE</button>
            </div>
          ))}
          <Formik
            initialValues={{
              title: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              additem(values.title, '', 'todos');
              resetForm();
            }}
          >
            <Form>
              <Field type="text" id="title" name="title" placeholder="todo" />
              <button type="submit">Add</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default ToDo;
