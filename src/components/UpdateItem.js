import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${id}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the item!", error);
      });
  }, [id]);

  return (
    <div className="container">
      <h1>Update Item</h1>
      {item && (
        <Formik
          initialValues={{ name: item.name, description: item.description, price: item.price }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            price: Yup.number().required('Required').positive('Must be positive')
          })}
          onSubmit={(values, { setSubmitting }) => {
            axios.put(`http://localhost:5000/items/${id}`, values)
              .then(response => {
                console.log(response.data);
                setSubmitting(false);
                alert("Item updated successfully!");
              })
              .catch(error => {
                console.error("There was an error updating the item!", error);
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <Field name="description" type="text" className="form-control" />
                <ErrorMessage name="description" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <Field name="price" type="number" className="form-control" />
                <ErrorMessage name="price" component="div" className="text-danger" />
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Item"}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UpdateItem;
