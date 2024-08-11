import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; 

const DeleteItem = () => {
  const navigate = useNavigate(); 
  const { id } = useParams();

  useEffect(() => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(response => {
        console.log('Item deleted successfully');
        navigate('/items'); 
      })
      .catch(error => {
        console.error('Error deleting item: ', error);
      });
  }, [id, navigate]);

  return (
    <div>
      <p>Deleting item...</p>
    </div>
  );
}

export default DeleteItem;
