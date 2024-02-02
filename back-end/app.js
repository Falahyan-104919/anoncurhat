require('dotenv').config();
const express = require('express');
const port = process.env.DEV_PORT;
const cors = require('cors');
const app = express();
const { connectDb } = require('./db/db');
const { getUsers } = require('./controllers/controller.users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get('/', getUsers);

app.listen(port, async () => {
  console.log(`Server is Running on Port : ${port} `);
  // await connectDb();
  // getUsers();
});
