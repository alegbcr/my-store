const express = require('express');
const path = require('path');
const router = express.Router();

// Servir archivos estáticos
router.use(express.static('public'));

// Home
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
