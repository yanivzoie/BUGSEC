const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

const cors = require('cors');
const PORT = '8000';

//Import Routes
const usersRoute = require('./routes/api/users');

app.use(cors());

//Connect to mongoDB
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('[MongoDB] Conected!');
  })
  .catch(() => console.log('[MongoDB] Conection Fail!'));

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Routes Middlewares
app.use('/api/users', usersRoute);

app.listen(PORT, () => {
  console.log(`[APP]: App listening on port ${PORT}!`);
});
