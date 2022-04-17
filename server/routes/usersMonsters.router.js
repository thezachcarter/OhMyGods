const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

    const queryText = `
    
    SELECT * FROM "users_monsters"
    JOIN "monsters"
    ON "monster_id" = "monsters".id
    WHERE "user_id" = 2;
    `
    
    pool.query(queryText)
        .then((result) => {
            console.log('users monsters GET: ', result.rows);
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