const express = require('express');
const app = express();
const port = 3000;

// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon application Express.js !');
});

// Écoute du port
app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});

