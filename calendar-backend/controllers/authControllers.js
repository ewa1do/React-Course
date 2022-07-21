const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  // error boundary
  const errors = validationResult(req);

  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
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

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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
