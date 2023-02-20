const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req:any, res:any) => {
  res.send('Hello World!');
  console.log("Hello client");
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})