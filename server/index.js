/**
 *
 * Author:
 * GitHub:
 */

// importing packages
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const initDB = require('./db/connection');

// initialing database
initDB();

// importing routes
const hello = require('./routes/hello');

// middlewares
app.use(express.json());
app.use(cors());

// adding routes
app.use(`/hello`, hello);

// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
