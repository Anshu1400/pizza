import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayAllItems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(() => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
      })
      .catch(error => {
        console.log('Error deleting item: ', error);
      });
  };

  const handleUpdate = (id) => {
    navigate(`/update-item/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>All Pizzas</h2>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4">
              <img src={item.image} height={250} className="card-img-top" alt={item.name}/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: {item.price}</p>
                <button className="btn btn-danger me-2" onClick={() => handleDelete(item.id)}>DELETE</button>
                <button className="btn btn-warning" onClick={() => handleUpdate(item.id)}>UPDATE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayAllItems;
