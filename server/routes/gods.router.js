const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {
//   // GET route code here
//   const queryText = `
//   SELECT * FROM "users_gods"
//   JOIN "gods"
//   ON "god_id" = "gods".id
//   WHERE "user_id" = 2
//   `
//     // console.log('god.router GET User ID ', req.user.id);
//     pool.query(queryText)
//     .then((result) => {
//         res.send(result.rows);
//       })
//     .catch((err) => {
//       console.log('god.router GET results failed: ', err);
//       res.sendStatus(500);
//     });

// });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});



module.exports = router;