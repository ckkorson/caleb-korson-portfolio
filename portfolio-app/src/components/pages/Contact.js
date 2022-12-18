import React from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue)
    } else if(inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  return (
    <div>
      <h1>Contact Me</h1>
      
    </div>
  );
}
