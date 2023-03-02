import { Request, Response } from "express-serve-static-core";

const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!!');
  console.log("Hello front!");
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})