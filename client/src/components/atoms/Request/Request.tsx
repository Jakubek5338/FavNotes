import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

interface ISignInProps {
  type: string;
  creator: string;
  title: string;
  body: string;
}

const Request = () => {
  const createNote = async ({ type, creator, title, body }: ISignInProps) => {
    try {
      await axios.post('http://localhost:8080/api/note', {
        type,
        creator,
        title,
        body,
      });
      console.log('Create Note');
    } catch (e) {
      console.log('Invalid email or password');
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          body: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          createNote({ type: 'note', creator: 'Jakub', title: values.title, body: values.body });
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
  );
};

export default Request;
