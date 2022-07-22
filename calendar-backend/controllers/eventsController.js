/**
 * Event Routes
 * HOST + /api/events
 */

const { response } = require('express');

const getEvent = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'getEvent',
  });
};

const createEvent = (req, res = response) => {
  // Verificar que tenga el evento
  console.log(req.body);

  res.status(201).json({
    ok: true,
    msg: 'createEvent',
  });
};

const updateEvent = (req, res = response) => {
  res.status(202).json({
    ok: true,
    msg: 'updateEvent',
  });
};

const deleteEvent = (req, res = response) => {
  res.status(202).json({
    ok: true,
    msg: 'deleteEvent',
  });
};

module.exports = {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
