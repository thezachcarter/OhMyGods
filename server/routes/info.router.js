const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */
router.get('/:name', (req, res) => {
    console.log('$$$$$$$$$$$$$$$$$$$$$$ info req.params.name:', req.params.name);
      axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${req.params.name}`)
    .then((response) => {
        console.log('&&&&&&&&&& WIKI API response.data', response.data);
        res.send(response.data);
      })
    .catch((err) => {
      console.log('info.router GET results failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;