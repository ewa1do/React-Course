/**
 * Event Routes
 * HOST + /api/events
 */

const { response } = require('express');
const Event = require('../models/EventModel');

const getEvent = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: 'getEvent',
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;

    const eventDB = await event.save();

    res.status(201).json({
      ok: true,
      event: eventDB,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
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
