const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:godId1/:godId2/:godId3', (req, res) => {

    const godId1 = req.params.godId1;
    const godId2 = req.params.godId2;
    const godId3 = req.params.godId3;
  
    const queryText = `
    SELECT * FROM "gods"
    WHERE "id" IN ($1, $2, $3)
    ;   
    `
      // console.log('god.router GET User ID ', req.user.id);
      pool.query(queryText, [godId1, godId2, godId3])
      .then((result) => {        
          res.send(result.rows);
        })
      .catch((err) => {
        res.sendStatus(500);
      });
  
  });

  router.put('/:godToReplace/:newGod', (req, res) => {

    const godToReplace = req.params.godToReplace;
    const newGod = req.params.newGod;
    const userId = req.user.id;
  
    const queryText = `
    UPDATE "users_gods"
    SET "god_id" = $2
    WHERE "god_id" = $1
    AND "user_id" = $3
    ;  
    `
      // console.log('god.router GET User ID ', req.user.id);
      pool.query(queryText, [godToReplace, newGod, userId])
      .then((result) => {        
          res.send(result.rows);
        })
      .catch((err) => {
        res.sendStatus(500);
      });
  
  });

module.exports = router;