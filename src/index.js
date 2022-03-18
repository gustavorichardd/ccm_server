require('dotenv').config()
require('express-async-errors');
const express = require('express');
const path = require('path')

const routes = require('./routes');
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

app.use(express.json());

app.use(routes);

// app.use((error, request, response, next) => {
//   console.log('###### Express error handler');
//   console.log(error);
//   response.sendStatus(500);
// });

const httpRunningPort = process.env.HTTP_PORT || 3334
app.listen(httpRunningPort, () => console.log(`Server started at 💻 http://localhost:${httpRunningPort}`));
