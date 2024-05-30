import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (input) => {

  const { target } = input;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'name') {
    setName(inputValue);
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
} else if (!name) {
  setErrorMessage('Please enter a name!');
  return;
}

  setName('');
  setEmail('');
  setMessage('');
}

  return (
    <div>
      <h2>Contact Page</h2>
        <p>Drop me a line, I'd love to hear from you!</p>
        <form className="form-container" onSubmit={handleFormSubmit}>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
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
    </div>
  );
}
