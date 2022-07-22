const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  notes: String,

  start: {
    type: Date,
    required: true,
  },

  end: {
    type: Date,
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Event', EventSchema);
