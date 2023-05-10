import React, { useState } from 'react';

import './../styles/App.css';



function App() {
  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input id="nameInput" type="text" value={name} onChange={handleNameChange} />
      {name && <p>Hello, {name}! Nice to meet you.</p>}
    </div>
  );
}

export default App;
