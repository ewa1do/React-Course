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
const fieldValidator = require('../middlewares/fieldValidator');
const { validateJWT } = require('../middlewares/validateJWT');

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
    fieldValidator,
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
      fieldValidator,
    ],
    loginUser
  );

router.get('/renew', validateJWT, revalidateToken);

module.exports = router;
