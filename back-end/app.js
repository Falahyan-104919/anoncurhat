require('dotenv').config();
const express = require('express');
const port = process.env.DEV_PORT;
const cors = require('cors');
const app = express();
const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');

const swaggerFile = fs.readFileSync('./swagger.yml', 'utf-8');
const swaggerDocs = YAML.parse(swaggerFile);

const routes = require('./routes/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/public', express.static('public'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/', routes);

app.listen(port, async () => {
  console.log(`Server is Running on Port : ${port} `);
});
