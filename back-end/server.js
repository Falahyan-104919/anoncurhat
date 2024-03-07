require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');

const swaggerFile = fs.readFileSync('./swagger.yml', 'utf-8');
const swaggerDocs = YAML.parse(swaggerFile);

const routes = require('./routes/index.js');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use('/public', express.static('public'));
server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
server.use('/', routes);

module.exports = { server }
