import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Welcome to Pizza Haven</h1>
      </header>
      <section className="about-main">
        <img 
          className="about-image" 
          src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" 
          alt="Delicious Pizza" 
        />
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            At Pizza Haven, we believe that great pizza starts with the best ingredients. Our journey began with a passion for crafting delicious, handcrafted pizzas that bring people together. Our chefs use only the freshest, locally-sourced ingredients to create mouthwatering pizzas that our customers rave about.
          </p>
          <p>
            From our classic Margherita to our unique gourmet creations, every pizza is made with love and attention to detail. Our dough is prepared daily, and our sauces are crafted from scratch to ensure the highest quality and flavor.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide an exceptional pizza experience for every customer. We are committed to delivering top-notch service, a welcoming atmosphere, and, of course, amazing pizza. Whether you're dining with us, ordering for delivery, or picking up a meal to-go, we're here to make your pizza experience unforgettable.
          </p>
          <h2>Join Us!</h2>
          <p>
            Come visit us at Pizza Haven and experience the difference for yourself. We look forward to serving you and sharing our love for pizza with you!
          </p>
        </div>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Pizza Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
