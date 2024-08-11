import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
     

      {/* Hero Section */}
      <div className="jumbotron text-center bg-light py-5 ">
        <h1 className="display-4">Welcome to Pizza Store!</h1>
        <p className="lead">Delicious pizzas made with the freshest ingredients.</p>
        <Link to="/items" className="btn btn-primary btn-lg">Order Now</Link>
      </div>

      {/* Featured Pizzas Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Featured Pizzas</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2024/04/18/10/41/ai-generated-8704060_640.jpg" className="card-img-top" alt="Margherita Pizza" />
              <div className="card-body">
                <h5 className="card-title">Margherita</h5>
                <p className="card-text">Classic Margherita with fresh tomatoes, mozzarella, and basil.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://t3.ftcdn.net/jpg/03/01/81/94/360_F_301819444_VWRpS5E6JBYqByrH9HoAlu59w8wdwOqI.jpg" className="card-img-top" alt="Pepperoni Pizza" />
              <div className="card-body">
                <h5 className="card-title">Pepperoni</h5>
                <p className="card-text">A crowd favorite topped with spicy pepperoni and mozzarella.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://media.istockphoto.com/id/956866342/photo/food-ingredients-and-spices-for-cooking-delicious-italian-pizza-mushrooms-tomatoes-cheese.jpg?s=1024x1024&w=is&k=20&c=AQ0Ak7tlFQLAtxAJ2Z-_hs4y2feQJsCszUi3jDTZGwA=" className="card-img-top" alt="BBQ Chicken Pizza" />
              <div className="card-body">
                <h5 className="card-title">BBQ Chicken</h5>
                <p className="card-text">Delicious BBQ chicken, red onions, and cilantro on a crispy crust.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-4">
        <p className="mb-0">© 2024 Pizza Store. All rights reserved.</p>
        <p className="mb-0">123 Pizza Street, Food City, FL 12345</p>
        <p>Email: info@pizzastore.com | Phone: (123) 456-7890</p>
      </footer>
    </div>
  );
};

export default Home;
