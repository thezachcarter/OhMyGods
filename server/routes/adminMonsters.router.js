const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
 

  const queryText = `
  SELECT * FROM "monsters"
  `
    // console.log('god.router GET User ID ', req.user.id);
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
      })
    .catch((err) => {
      console.log('adminMonsters.router GET results failed: ', err);
      res.sendStatus(500);
    });

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const queryText = `
  INSERT INTO "monsters"
  ("name", "culture", "element", "image", "info", "starting_power")
  VALUES ($1, $2, $3, $4, $5, $6)
  `
  pool.query(queryText, [req.body.name, req.body.culture, req.body.element, req.body.image, req.body.info, req.body.starting_power])
  .then(result => {
    res.sendStatus(201)
  }).catch(err => {
    console.log('error in adminGod.router POST', err);
    sendStatus(500)
  });
});

module.exports = router;