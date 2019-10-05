const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');

const server = express();

dotenv.config();
mongoose.connect(process.env.DB_CONNECTION_URL, {
  useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);