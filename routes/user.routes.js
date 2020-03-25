const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(req.user) {
    next();
  }
  else {
    res.redirect('/no-permission');
  }
};

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {name: req.user.displayName, image: req.user.photos.value});
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;