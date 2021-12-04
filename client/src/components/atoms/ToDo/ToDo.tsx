import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../state';

function ToDo() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.todo);
  const { addtodo, removetodo } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div>
        <div>
          {state.todo.map(({ title }) => (
            <div key={title}>
              <h1>{title}</h1>
              <button onClick={() => removetodo(title)}>REMOVE</button>
            </div>
          ))}
          <Formik
            initialValues={{
              title: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              addtodo('title');
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
