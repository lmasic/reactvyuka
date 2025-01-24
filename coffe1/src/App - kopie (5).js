import React from "react";
import Form from "@rjsf/core";
import validator from '@rjsf/validator-ajv8';

//https://rjsf-team.github.io/react-jsonschema-form/docs/json-schema/single/
const schema = {
  title: "Příklad formuláře",
  type: "object",
  properties: {
    name: { type: "string", title: "Jméno", default: "" },
    gender: {
      type: "string",
      title: "Pohlaví",
      enum: ["1", "2"],
      enumNames: ["Masopust Lukáš", "Molič Jan"]
    },
    subscribe: { type: "boolean", title: "Odebírat novinky" }
  }
};

const uiSchema = {
  gender: {
    "ui:widget": "radio" // Použití radio buttonů pro výběr pohlaví
  },
  subscribe: {
    "ui:widget": "checkbox" // Použití checkboxu pro odběr novinek
  }
};

function App() {
  const handleSubmit = ({ formData }) => {
    console.log("Data z formuláře:", formData);
  };

  return (
    <div>
      <h1>Generovaný formulář</h1>
      <Form schema={schema} uiSchema={uiSchema} validator={validator} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
