/**
 * User routes:
 * PATH: host + /api/auth
 */

const { Router } = require('express');

const router = Router();

router.route('/').get((req, res) => {
  res.status(200).json({
    ok: true,
  });
});

// router.get('/', (req, res) => {
//   res.status(200).json({
//     ok: true,
//   });
// });

module.exports = router;
