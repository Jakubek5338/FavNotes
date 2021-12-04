import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useAuth } from '../hooks/useAuth';

const UnauthenticatedApp = () => {
  const [newUser, setNewUser] = useState(false);
  const register = () => setNewUser(!newUser);

  const { signIn, signUp } = useAuth();

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          {
            newUser
              ? signUp({ login: values.email, password: values.password })
              : signIn({ login: values.email, password: values.password });
          }
          resetForm();
        }}
      >
        {newUser ? (
          <>
            <h1>Please register</h1>
            <Form>
              <Field type="text" id="login" name="login" placeholder="email" />
              <Field type="text" id="password" name="password" placeholder="password" />
              <button type="submit">Register</button>
            </Form>
            <button onClick={register}>I wont to login</button>
          </>
        ) : (
          <>
            <h1>Please Log In</h1>
            <Form>
              <Field type="text" id="login" name="login" placeholder="email" />
              <Field type="text" id="password" name="password" placeholder="password" />
              <button type="submit">Log In</button>
            </Form>
            <button onClick={register}>I wont to register</button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default UnauthenticatedApp;
