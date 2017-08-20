/* jshint esversion:6 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// Parsers for form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files stores in the dist directory (requires ng build)
app.use(express.static(path.join(__dirname, 'dist')));

// Set up API routes
// app.use('/api', api);

// Return other routes to Angular's root index file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__firname, 'dist/index.html'));
});

// Set port
const port = process.env.PORT || '8000';
app.set('port', port);

// Create the HTTP server
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));