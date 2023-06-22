import React, { useState } from 'react';
const Form = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', name);
    setName('')//CLEARS THE NAME VALUE
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;