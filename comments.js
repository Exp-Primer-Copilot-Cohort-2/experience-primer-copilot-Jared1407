// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

const app = express();

app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments.get());
});

// Add a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  if (comment) {
    comments.add(comment);
    res.status(201).json(comment);
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});