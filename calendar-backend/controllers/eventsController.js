/**
 * Event Routes
 * HOST + /api/events
 */

const { request, response } = require('express');
const Event = require('../models/EventModel');

const getEvent = async (req, res = response) => {
  const allEvents = await Event.find({}).populate('user', 'name');

  res.status(200).json({
    ok: true,
    events: {
      allEvents,
    },
  });
};

const getOneEvent = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(404).json({
        ok: false,
        msg: 'No se puede encontrar el evento',
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

const updateEvent = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        ok: true,
        msg: 'No existe un evento con ese id',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento',
      });
    }

    const newEvent = { ...req.body, user: uid };

    const eventUpdated = await Event.findOneAndUpdate(id, newEvent, {
      new: true,
      runValidators: true,
    });

    res.status(202).json({
      ok: true,
      event: eventUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

const deleteEvent = async (req, res = response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        ok: true,
        msg: 'No se puede encontrar el evento',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento',
      });
    }

    await Event.findByIdAndDelete(id);

    res.status(204).json({
      ok: true,
      msg: 'Event Deleted',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

module.exports = {
  getEvent,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
