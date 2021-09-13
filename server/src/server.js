require('dotenv').config();
const https = require('https');
const { mongoConnect } = require('./Db/mongo');
const { app } = require('./app');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT;

const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, '..', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'cert.pem')),
  },
  app
);

function startServer() {
  mongoConnect();
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
  });
}

startServer();
