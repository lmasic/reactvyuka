//import React from "react";
import Form from "@rjsf/core";
import validator from '@rjsf/validator-ajv8';
import React, { useEffect, useState } from 'react';



const App = () => {

 
  
var schema = {title: "Příklad formuláře",
  type: "object",
  properties:{} };
  /*  
schema["title"]=  "Příklad formuláře";
schema["type"]= "object",
schema["properties"]=  {};
*/
    fetch('http://ajax0.lmsoft.cz/procedure.php?cmd=getPeopleList')
      .then(response => response.json())
      .then(data => {
      console.log("::");
      console.log(data);
      
      console.log( Object.keys(data).length);
      console.log(Object.values(data));  
        
      for (var i=1; i < Object.keys(data).length; i++) {
         console.log(data[i]);
         
         console.log(Object.keys(data[i]));
         
         var t_enum=[];
         t_enum.push(data[i]["ID"]);
         var enumNames=[];
         enumNames.push(data[i]["name"])
         
        
         schema["properties"]["users"] ={
          enum: t_enum,
          enumNames: enumNames
         };
         //console.log(t_enum);
      }//for
      
      console.log("schema:",schema);

      });
 
  const [formData, setFormData] = useState({});
return (
  
    <div>
      <h1>Generated Form</h1>
      <Form 
        schema={schema} 
        formData={formData} 
        validator={validator}
        onChange={({ formData }) => setFormData(formData)} 
      />
    
    </div>
  );


};

export default App; 

/*const schema = {
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
};*/
