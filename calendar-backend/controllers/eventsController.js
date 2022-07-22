/**
 * Event Routes
 * HOST + /api/events
 */

const { request, response } = require('express');
const Event = require('../models/EventModel');

const getEvent = async (req, res = response) => {
  const allEvents = await Event.find({}).populate('user', 'name');

  try {
    if (!allEvents) {
      return res.json({
        ok: false,
        msg: 'No hay informacion de los eventos',
      });
    }

    res.status(200).json({
      ok: true,
      events: {
        allEvents,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

const getOneEvent = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({
        ok: false,
        msg: 'El evento no existe',
      });
    }

    const event = await Event.findById(id).populate('user', 'name');

    res.status(200).json({
      ok: true,
      event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
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
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
