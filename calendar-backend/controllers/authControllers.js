const { response } = require('express');
const User = require('../models/UserModel');

const createUser = async (req, res = response) => {
  // const { name, email, password } = req.body;

  try {
    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      ok: true,
      msg: 'register',
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador :/ ',
    });
  }
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const revalidateToken = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'renew',
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
