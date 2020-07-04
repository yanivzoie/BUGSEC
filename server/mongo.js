const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then((connection) => {
    console.log('[MongoDB] Conected!');
    console.log(`[MongoDB] URI: ${mongoURI}`);
  })
  .catch(() => {
    console.log('[MongoDB] Conection Fail!');
  });
