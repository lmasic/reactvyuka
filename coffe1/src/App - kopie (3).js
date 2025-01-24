import React, { useState } from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const schema = {
 
  properties: {
    "1": {
     
      properties: {
        ID: { type: "string" },
        name: { type: "string" },
        email: { type: "string", format: "email" }
      },
      required: ["ID", "name", "email"]
    },
    "2": {
     
      properties: {
        ID: { type: "string" },
        name: { type: "string" },
        email: { type: "string", format: "email" }
      },
      required: ["ID", "name", "email"]
    },
    "3": {
     
      properties: {
        ID: { type: "string" },
        name: { type: "string" },
        email: { type: "string", format: "email" }
      },
      required: ["ID", "name", "email"]
    },
    "4": {
     
      properties: {
        ID: { type: "string" },
        name: { type: "string" },
        email: { type: "string", format: "email" }
      },
      required: ["ID", "name", "email"]
    }
  },
  required: ["1", "2", "3", "4"]
};

const App = () => {
  const [formData, setFormData] = useState({});

  return (
  <>
    <div>
      <h1>Generated Form</h1>
      <Form 
        schema={schema} 
        formData={formData} 
        validator={validator}
        onChange={({ formData }) => setFormData(formData)} 
      />
    </div>
    </>
  );
};

export default App;
