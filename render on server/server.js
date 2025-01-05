// npm install react react-dom express
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();

app.get('/', (req, res) => {
  const componentHTML = ReactDOMServer.renderToString('<MyComponent />');
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with React</title>
      </head>
      <body>
        <div id="root">Hello, Server-Side Rendering</div>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// node server.js