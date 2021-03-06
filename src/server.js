const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || '3000';

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.send('App.js');
});