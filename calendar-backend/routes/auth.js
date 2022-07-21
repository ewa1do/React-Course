/**
 * User routes:
 * PATH: host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const {
  createUser,
  loginUser,
  revalidateToken,
} = require('../controllers/authControllers');

const router = Router();

router.route('/new').post(
  [
    // middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check(
      'password',
      'La contraseña debe contener al menos 6 caracteres'
    ).isLength({ min: 6 }),
  ],
  createUser
);

router
  .route('/')
  .post(
    [
      check('email', 'El email es obligatorio').isEmail(),
      check(
        'password',
        'La contraseña debe contener al menos 6 caracteres'
      ).isLength({ min: 6 }),
    ],
    loginUser
  );

router.get('/renew', revalidateToken);

module.exports = router;
