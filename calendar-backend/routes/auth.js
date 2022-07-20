/**
 * User routes:
 * PATH: host + /api/auth
 */

const { Router } = require('express');
const {
  createUser,
  loginUser,
  revalidateToken,
} = require('../controllers/authControllers');

const router = Router();

router.route('/new').post(createUser);

router.route('/').post(loginUser);

router.get('/renew', revalidateToken);

module.exports = router;
