const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const password_hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password_hash });
  res.json(user);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (user && await bcrypt.compare(password, user.password_hash)) {
    res.json({ message: 'Logged in' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
