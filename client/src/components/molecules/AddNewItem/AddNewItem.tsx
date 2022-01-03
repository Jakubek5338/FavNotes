import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import AddIcon from '../../../assets/icons/plus.svg';

interface AddNewItemProps {
  type: string;
}

function AddNewItem({ type }: AddNewItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const setVisible = () => setIsVisible(!isVisible);
  const dispatch = useDispatch();
  const { additem } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <button
        className="fixed right-5 bottom-5 w-16 h-16 bg-green-400 rounded-full z-0 flex justify-center items-center"
        onClick={setVisible}
      >
        <img src={AddIcon} />
      </button>
      {isVisible ? (
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
          <div className="w-3/4 md:w-2/5 p-4 fixed top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 rounded-lg border-2 border-green-500 flex flex-col justify-center items-center">
            <Form>
              <Field type="text" id="title" name="title" placeholder="title" className="w-4/5 my-2 rounded-lg" />
              {type === 'notes' ? (
                <>
                  <Field type="textarea" id="body" name="body" placeholder="body" />
                  <button className="bg-green-500 text-xs w-40 rounded-xl p-2 my-4" onClick={setVisible}>
                    Add Note
                  </button>
                </>
              ) : null}
              <button type="submit">Add</button>
            </Form>
          </div>
        </Formik>
      ) : null}
    </>
  );
}

export default AddNewItem;
