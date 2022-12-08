const router = require('express').Router();
const { User } = require('../../models');

// POST: Signing up, post request
router.post('/', async (req, res) => {
  try {
    // takes the user's input
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    // and saves them in the database.
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST: Login 
router.post('/login', async (req, res) => {
  try {
    // searches database for the user's username
    const userCheck = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userCheck) {
      res.status(400).json({ message: 'Incorrect email or password, please try again.' });
      return;
    }

    // checks password
    const validPassword = userCheck.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again.' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userCheck.id;
      req.session.username = userCheck.username;
      res.json({ user: userCheck, message: 'Logged in successfully!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'Incorrect email or password, please try again.' });
  }
});

// POST: Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // Deletes session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
