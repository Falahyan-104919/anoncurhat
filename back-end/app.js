require('dotenv').config();
const express = require('express');
const port = process.env.DEV_PORT;
const cors = require('cors');
const app = express();
const routes = require('./routes/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/public', express.static('public'));

app.use('/', routes);

app.listen(port, async () => {
  console.log(`Server is Running on Port : ${port} `);
});
