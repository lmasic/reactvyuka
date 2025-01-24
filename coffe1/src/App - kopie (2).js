import React, { useState } from 'react';
import Form from '@rjsf/core';

const schema = {
  type: "object",
  properties: {
    "1": {
      type: "object",
      properties: {
        ID: { type: "string" },
        name: { type: "string" },
        email: { type: "string", format: "email" }
      },
      required: ["ID", "name", "email"]
    },
    "2": {
      type: "object",
      properties: {
        ID: { type: "string" },
        name: { type: "string" },
        email: { type: "string", format: "email" }
      },
      required: ["ID", "name", "email"]
    },
    "3": {
      type: "object",
      properties: {
        ID: { type: "string" },
        name: { type: "string" },
        email: { type: "string", format: "email" }
      },
      required: ["ID", "name", "email"]
    },
    "4": {
      type: "object",
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
        onChange={({ formData }) => setFormData(formData)} 
      />
    </div>
    </>
  );
};

export default App;
