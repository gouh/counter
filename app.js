const express = require('express');
const http = require('http');
const indexRouter = require('./routes/index');
const createSocketServer = require('./servers/wsServer');
const path = require("path");

// Create server
const app = express();
const server = http.createServer(app);

// Create socket server
createSocketServer(server);

// Load public folder
app.use(express.static('public'));
app.use('/', indexRouter);

// Make health check
app.get('/v1/health_check', (req, res) => {
    res.status(200).send('OK');
});

// Run server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
