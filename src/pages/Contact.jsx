import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (input) => {

  const { target } = input;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'firstName') {
    setFirstName(inputValue);
  } else if (inputType === 'lastName') {
    setLastName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else {
    setMessage(inputValue);
  }
}

const handleFormSubmit = (event) => {
  input.preventDefault();

if (!validateEmail(email)) {
  setErrorMessage('Email is invalid');
} else if (!firstName || !lastName) {
  setErrorMessage('Please enter a name!');
  return;
}

  setFirstName('');
  setLastName('');
  setEmail('');
  setMessage('');
}

  return (
    <div className="form-container">
      <h1>Contact Page</h1>
      <p>
        <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="johndoe@doejohn.com"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="leave a message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </p>
    </div>
  );
}
