const { response } = require('express');
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Ya existe un usuario con ese email',
      });
    }

    // user = new User();

    // * Encrypt password
    // const salt = await bcrypt.genSalt();
    // user.password = await bcrypt.hash(password.toString(), salt);
    // await user.save();

    const passwordHash = await bcrypt.hash(password.toString(), 12);

    user = await User.create({
      name,
      email,
      password: passwordHash,
    });

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador :/ ',
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'No existe un usuario con ese email',
      });
    }

    // Confirm passwords
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Incorrect password',
      });
    }

    // Generar JWT

    res.status(200).json({
      ok: true,
      msg: 'login',
      user: {
        uid: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador :/ ',
    });
  }
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
