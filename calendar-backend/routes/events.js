const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventsController');

const router = Router();

router.use(validateJWT);

router.route('/').get(getEvent).post(createEvent);

router.route('/:id').put(updateEvent).delete(deleteEvent);

module.exports = router;
