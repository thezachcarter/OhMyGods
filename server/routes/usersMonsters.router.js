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
    ORDER BY "users_monsters"."id" ASC
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
});

/**
 * PUT route template
//  */
router.put('/:power', (req, res) => {
    // PUT route code here

    //id is the id in "users_monsters" join table
    const power = req.params.power;
    const id = req.user.id;

    const queryText = `
        UPDATE "users_monsters" 
        SET "power" = $1
        WHERE "id" = $2
        ;`
   
    pool.query(queryText, [power, id])
    .then((result) => {
        res.send(result.rows);
      })
    .catch((err) => {
      console.log('usersMonsters.router PUT results failed: ', err);
      res.sendStatus(500);
    });
  });

module.exports = router;