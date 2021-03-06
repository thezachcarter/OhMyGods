const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

  const id = req.user.id

  const queryText = `
    SELECT * FROM "users_monsters"
    JOIN "monsters"
    ON "monster_id" = "monsters".id
    WHERE "user_id" = $1
    ORDER BY "monster_id"
    ;
    `

  pool.query(queryText, [id])
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
  const id = req.user.id;

  const queryText =
    `INSERT INTO "users_monsters" ("user_id", "monster_id", "power")
      VALUES ($1,1,10), ($1,2,12), ($1,3,14), ($1,4,16), ($1,5,18),
      ($1,6,20), ($1,7,22), ($1,8,24), ($1,9,26), ($1,10,28), ($1,11,30),
      ($1,12,32), ($1,13,34), ($1,14,36), ($1,15,38), ($1,16,40);`;

  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('POPULATE MONSTERS FAILED: ', err);
      res.sendStatus(500);
    });
});

/**
 * PUT route template
//  */
router.put('/:power/:id', (req, res) => {

  //params.id is the id in "users_monsters" join table
  const power = req.params.power;
  const monster_id = req.params.id;
  const user_id = req.user.id;

  const queryText = `
        UPDATE "users_monsters" 
        SET "power" = $1
        WHERE "monster_id" = $2 AND "user_id" = $3
        ;`

  pool.query(queryText, [power, monster_id, user_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('usersMonsters.router PUT results failed: ', err);
      res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
  // POST route code here
  const id = req.user.id;

  const queryText =
    `DELETE FROM "users_monsters"
      WHERE "user_id" = $1`;

  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('DELETE USERS MONSTERS: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;