import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../state';

function Sides() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.sides);
  const { addside, removeside } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div>
        <div>
          {state.sides.map(({ title }) => (
            <div key={title}>
              <h1>{title}</h1>
              <button onClick={() => removeside(title)}>REMOVE</button>
            </div>
          ))}
          <Formik
            initialValues={{
              title: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              addside(values.title);
              resetForm();
            }}
          >
            <Form>
              <Field type="text" id="title" name="title" placeholder="side" />
              <button type="submit">Add</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Sides;
