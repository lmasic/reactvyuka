/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    user: '',
    types: {
      Mléko: 0,
      Espresso: 0,
      Coffe: 0,
      Long: 0,
      Doppio: 0,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'user') {
      setFormData({
        ...formData,
        user: value,
      });
    } else {
      setFormData({
        ...formData,
        types: {
          ...formData.types,
          [name]: Number(value),
        },
      });
    }
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'http://lm/saveDrinks';
    const method = formData.id > 0 ? 'put' : 'post';
    console.log(formData);
    axios({
      method,
      url,
      data: formData,
    })
      .then((response) => {
        console.log(response);
        setFormData({
          user: '',
          types: {
            Mléko: 0,
            Espresso: 0,
            Coffe: 0,
            Long: 0,
            Doppio: 0,
          },
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <div id="form">
        <input type="radio" id="user1" name="user" value="1" required onChange={handleInputChange} checked={formData.user === '1'} />
        <label htmlFor="user1" className="userLabel">Masopust Lukáš</label>
        <br />
        <input type="radio" id="user2" name="user" value="2" required onChange={handleInputChange} checked={formData.user === '2'} />
        <label htmlFor="user2" className="userLabel">Molič Jan</label>
        <br />
        <input type="radio" id="user3" name="user" value="3" required onChange={handleInputChange} checked={formData.user === '3'} />
        <label htmlFor="user3" className="userLabel">Adamek Daniel</label>
        <br />
        <input type="radio" id="user4" name="user" value="4" required onChange={handleInputChange} checked={formData.user === '4'} />
        <label htmlFor="user4" className="userLabel">Weber David</label>
        <br />

        <label htmlFor="Mléko">Mléko</label>
        <b id="countMléko">{formData.types.Mléko}</b>
        <input type="range" className="range" id="Mléko" name="Mléko" value={formData.types.Mléko} min="0" max="10" onChange={handleInputChange} />
        <br />

        <label htmlFor="Espresso">Espresso</label>
        <b id="countEspresso">{formData.types.Espresso}</b>
        <input type="range" className="range" id="Espresso" name="Espresso" value={formData.types.Espresso} min="0" max="1" onChange={handleInputChange} />
        <br />

        <label htmlFor="Coffe">Coffe</label>
        <b id="countCoffe">{formData.types.Coffe}</b>
        <input type="range" className="range" id="Coffe" name="Coffe" value={formData.types.Coffe} min="0" max="1" onChange={handleInputChange} />
        <br />

        <label htmlFor="Long">Long</label>
        <b id="countLong">{formData.types.Long}</b>
        <input type="range" className="range" id="Long" name="Long" value={formData.types.Long} min="0" max="1" onChange={handleInputChange} />
        <br />

        <label htmlFor="Doppio">Doppio+</label>
        <b id="countDoppio">{formData.types.Doppio}</b>
        <input type="range" className="range" id="Doppio" name="Doppio" value={formData.types.Doppio} min="0" max="1" onChange={handleInputChange} />
        <br />
      </div>
      <input type="submit" value="odeslat" />
    </form>
  );
};

export default Form;
