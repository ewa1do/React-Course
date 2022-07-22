const { Router } = require('express');
const { check } = require('express-validator');

const fieldValidator = require('../middlewares/fieldValidator');
const { validateJWT } = require('../middlewares/validateJWT');
const isDate = require('../helpers/isDate');
const {
  getEvent,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventsController');

const router = Router();

router.use(validateJWT);

router
  .route('/')
  .get(getEvent)
  .post(
    [
      check('title', 'El titulo es obligatorio').not().isEmpty(),
      check('start', 'Fecha de inicio es obligatoria').custom(isDate),
      check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
      fieldValidator,
    ],

    createEvent
  );

// prettier-ignore
router
  .route('/:id')
  .get(getOneEvent)
  .put(updateEvent)
  .delete(deleteEvent);

module.exports = router;
