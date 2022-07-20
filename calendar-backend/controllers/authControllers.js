const { response } = require('express');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: 'El nommbre debe contener al menos 5 letras',
    });
  }

  res.status(201).json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  });
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
