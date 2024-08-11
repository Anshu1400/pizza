import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddNewItem = () => {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState('');

  const initialValues = {
    name: '',
    price: '',
    imageUrl: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive').integer('Price must be an integer'),
    imageUrl: Yup.string().url('Invalid URL format').required('Image URL is required'),
    description: Yup.string().required('Description is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post('http://localhost:5000/items', values)
      .then(response => {
        console.log('Item added successfully: ', response.data);
        resetForm();
        navigate("/items");
      })
      .catch(error => {
        console.error('Error adding item: ', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <h2>Add a New Pizza Item</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" className="form-control" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Field type="number" className="form-control" id="price" name="price" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field type="text" className="form-control" id="description" name="description" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <Field 
                type="text" 
                className="form-control" 
                id="imageUrl" 
                name="imageUrl" 
                image="imageurl"
                onChange={(e) => {
                  setFieldValue('imageUrl', e.target.value);
                  setPreviewUrl(e.target.value);  // Set the preview URL
                }}
              />
              <ErrorMessage name="imageUrl" component="div" className="text-danger" />
            </div>

            {/* Display the image preview if an image URL is provided */}
            {previewUrl && (
              <div className="form-group">
                <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Add Item
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewItem;
