import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Pizza Store</h2>
      <p>You can reach us at:</p>
      <ul>
        <li>Email: contact@pizzastore.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
      <p>Or use the form below:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
