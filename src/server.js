const https = require('https');
const app = require('./app');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
//TODO: ssl sie zjebalo
const options = {
  key: fs.readFileSync(path.join(__dirname, '..', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '..', 'cert.pem')),
};

const PORT = process.env.PORT;

const server = https.createServer(options, app);

function startServer() {
  // mongoConnect();
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
  });
}

startServer();
