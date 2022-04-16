const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  
  const monsterId = 1;
//   PLUS USER SCORE WHEN AVAILABLE  

  const queryText = `
  SELECT * FROM "monsters"
  WHERE "id" = $1
  `
    // console.log('god.router GET User ID ', req.user.id);
    pool.query(queryText, [monsterId])
    .then((result) => {
        res.send(result.rows);
      })
    .catch((err) => {
      console.log('monster.router GET results failed: ', err);
      res.sendStatus(500);
    });

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;