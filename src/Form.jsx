import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comment: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      comment: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Firstname:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Lastname:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          E-mail:
          <input
            type='email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Comment:
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;