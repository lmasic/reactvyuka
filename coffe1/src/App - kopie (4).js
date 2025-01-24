// https://stackoverflow.com/questions/77276369/how-to-access-form-data-in-a-post-request-when-using-react-typescript

import React, { useState } from "react";
//import ReactDOM from "react-dom/client";
 const App = () => {

  
  const handleChange = (event) => {
     const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  
    const [formData, setFormData] = useState({
    myCar: 'Volvo',
    textarea: 'lm',
    mleko:0
  });

     const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('name', formData.myCar);
    postData.append('mleko', formData.mleko);
    postData.append('textarea', formData.textarea);
    
    fetch('http://lm/x.php', {
      method: 'POST',
      /*headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      */
      body:postData
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  if (isSubmitted) {
    return <p>Odesláno!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <select name="myCar" value={formData.myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <br />
      
      <label>Mléko: <b>{formData.mleko}</b>
      <input 
        type="range" 
        name="mleko" 
        step="1"
        value={formData.mleko} 
        onChange={handleChange}
      />
      </label>
      <p></p>
      <textarea name="textarea" value={formData.textarea} onChange={handleChange} />
      <br />
       <button type="submit">Submit</button>
    </form>
  );
};


export default App;