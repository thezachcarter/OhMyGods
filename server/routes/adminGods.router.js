const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here

  if (req.user.admin === true) {

    const queryText = `
  SELECT * FROM "gods"
  ORDER BY "id" ASC
  `
    // console.log('god.router GET User ID ', req.user.id);
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('god.router GET results failed: ', err);
        res.sendStatus(500);
      });
  }
  else {
    console.log('UNAUTHORIZED!')
  }

});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here

  if (req.user.admin === true) {

    const queryText = `
  INSERT INTO "gods"
  ("name", "culture", "element", "image", "info")
  VALUES ($1, $2, $3, $4, $5)
  `
    pool.query(queryText, [req.body.name, req.body.culture, req.body.element, req.body.image, req.body.info])
      .then(result => {
        res.sendStatus(201)
      }).catch(err => {
        console.log('error in adminGod.router POST', err);
        sendStatus(500)
      });
  }
  else {
    console.log('UNAUTHORIZED!')
  }

});

router.delete('/:id', rejectUnauthenticated, (req, res) => {

  if (req.user.admin === true) {

    const queryText = `DELETE FROM "monsters"
                    WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200) })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500)
      });
  }
  else {
    console.log('UNAUTHORIZED!')
  }
});



module.exports = router;