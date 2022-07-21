const { response } = require('express');
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/JWT');

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

    // Generar JWT
    const token = await generateJWT(user.id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
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

    // Confirm passwords!
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Incorrect password',
      });
    }

    // Generar JWT
    const token = await generateJWT(user.id, user.name);

    res.status(200).json({
      ok: true,
      msg: 'login',
      user: {
        uid: user.id,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador :/ ',
    });
  }
};

const revalidateToken = async (req, res) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.status(200).json({
    ok: true,
    token,
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
