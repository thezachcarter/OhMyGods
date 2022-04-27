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
  const id = req.user.id;

  const queryText = `INSERT INTO "users_gods" ("user_id", "god_id")
  VALUES ($1,1), ($1,2), ($1,3), ($1,4);`;

  pool
  .query(queryText, [id])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('POPULATE GODS FAILED: ', err);
    res.sendStatus(500);
  });
});



/**
 * PUT route template
//  */
 router.put('/:power/:id', (req, res) => {
    // ID refers to user_monster id NOT user id
    console.log('usersGods.router PUT params', req.params);
    

    //params.id is the god_id in "users_gods" join table
    const power = req.params.power;
    const god_id = req.params.id;
    const user_id = req.user.id;

    const queryText = `
        UPDATE "users_gods" 
        SET "power" = $1
        WHERE "god_id" = $2 AND "user_id" = $3
        ;`
    // console.log('god.router GET User ID ', req.user.id);
    pool.query(queryText, [power, god_id, user_id])
    .then((result) => {
        res.send(result.rows);
      })
    .catch((err) => {
      console.log('usersGods.router PUT results failed: ', err);
      res.sendStatus(500);
    });
  });

  router.delete('/', (req, res) => {
    // POST route code here
    const id = req.user.id;
  
    const queryText = 
      `DELETE FROM "users_gods"
      WHERE "user_id" = $1`;
  
    pool
    .query(queryText, [id])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('DELETE USERS GODS: ', err);
      res.sendStatus(500);
    });
  });

module.exports = router;