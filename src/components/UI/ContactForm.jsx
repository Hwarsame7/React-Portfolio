import { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // state variables to be used in contact form - default content and ability to edit
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Check email input using helper.js validator
        if (!validateEmail(email)) {
            setErrorMessage('Email not valid');
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
        alert(`Thanks for your message ${name}, I'll get back to you soon`);
    };

    return (
        <div className="container text-center">
          <h1>Hello {name}</h1>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
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

export default ContactForm;