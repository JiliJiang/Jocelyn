const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    
const users = await User.findAll({})
res.json(users);

});


router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log("newUser", newUser);

    req.session.save(() => {
      //req.session.id = newUser.id;
      req.session.name = newUser.name;
      req.session.loggedIn = true;

      res.json(newUser);
    });
    //res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (!user) {
      res.status(500).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(500).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
        // req.session.id = newUser.id;
        req.session.name = newUser.name;
        req.session.loggedIn = true;
      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;