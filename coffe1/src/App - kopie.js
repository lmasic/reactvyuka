import React, { useEffect, useState } from 'react';
import Form from '@rjsf/core';



const App = () => {


  const [schema, setSchema] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch('http://ajax0.lmsoft.cz/procedure.php?cmd=getPeopleList')
      .then(response => response.json())
      .then(data => {
      console.log(data);
      
        
        setSchema({
        
                    
            "type": "object",
            "properties": {
              "1": {
                "type": "object",
                "properties": {
                  "ID": { "type": "string" },
                  "name": { "type": "string" },
                  "email": { "type": "string", "format": "email" }
                },
                "required": ["ID", "name", "email"]
              },
              "2": {
                "type": "object",
                "properties": {
                  "ID": { "type": "string" },
                  "name": { "type": "string" },
                  "email": { "type": "string", "format": "email" }
                },
                "required": ["ID", "name", "email"]
              },
              "3": {
                "type": "object",
                "properties": {
                  "ID": { "type": "string" },
                  "name": { "type": "string" },
                  "email": { "type": "string", "format": "email" }
                },
                "required": ["ID", "name", "email"]
              },
              "4": {
                "type": "object",
                "properties": {
                  "ID": { "type": "string" },
                  "name": { "type": "string" },
                  "email": { "type": "string", "format": "email" }
                },
                "required": ["ID", "name", "email"]
              }
            },
            "required": ["1", "2", "3", "4"]

        
          
        });//setchembah
        setFormData({ people: data });
      });
  }, []);

  if (!schema) {
    return <div>Loading...</div>;
  }
  return (
  
    <div>
      <h1>Generated Form</h1>
      <Form 
        schema={schema} 
        formData={formData} 
        onChange={({ formData }) => setFormData(formData)} 
      />
    
    </div>
  );
};

export default App;
