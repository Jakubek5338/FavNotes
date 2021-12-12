import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../state';

function Sides() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.sides);
  const { additem, removeitem } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div>
        <div>
          {state.sides.map(({ title, _id }) => (
            <div key={_id}>
              <h1>{title}</h1>
              <button onClick={() => removeitem(_id, 'sides')}>REMOVE</button>
            </div>
          ))}
          <Formik
            initialValues={{
              title: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              additem(values.title, '', 'sides');
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
