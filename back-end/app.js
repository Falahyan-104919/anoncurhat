require('dotenv').config();
const express = require('express');
const port = process.env.DEV_PORT;
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server is Running on Port : ${port} `);
});
