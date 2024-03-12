const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta raíz que sirve el archivo index.html
router.get('/public', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
