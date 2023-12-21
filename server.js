const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "www" folder
app.use(express.static(path.join(__dirname, 'www')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
