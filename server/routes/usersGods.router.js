const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {

  const id = req.user.id

  const queryText = `
  SELECT * FROM "users_gods"
  JOIN "gods"
  ON "god_id" = "gods".id
  WHERE "user_id" = $1
  ORDER BY "users_gods"."id" ASC
  `
    // console.log('god.router GET User ID ', req.user.id);
    pool.query(queryText, [id])
    .then((result) => {
        console.log('----------- req:', req.user);
        res.send(result.rows);
      })
    .catch((err) => {
      console.log('usersGods.router GET results failed: ', err);
      res.sendStatus(500);
    });

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});



/**
 * PUT route template
//  */
 router.put('/:power', (req, res) => {
    // PUT route code here
    console.log('usersGods.router PUT params', req.params);
    

    //id is the id in "users_gods" join table
    const power = req.params.power;
    const id = req.user.id;

    const queryText = `
        UPDATE "users_gods" 
        SET "power" = $1
        WHERE "id" = $2
        ;`
    // console.log('god.router GET User ID ', req.user.id);
    pool.query(queryText, [power, id])
    .then((result) => {
        res.send(result.rows);
      })
    .catch((err) => {
      console.log('usersGods.router PUT results failed: ', err);
      res.sendStatus(500);
    });
  });


module.exports = router;