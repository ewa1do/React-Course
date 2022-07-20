const createUser = (req, res) => {
  res.status(201).json({
    ok: true,
    msg: 'register',
    data: req.body,
  });
};

const loginUser = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'login',
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
