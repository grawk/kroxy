'use strict';

var IndexModel = require('../models/index');

exports.index = function(req, res) {
  var model = new IndexModel();
  res.render('index', model);
};

// exports.setLocale = function (req, res) {
//     res.cookie('locale', req.params.locale);
//     res.redirect('/');
// };

exports.comments = function(req, res) {
  var model = [{
    'author': 'Jon Bolt',
    'text': 'Is this thing on?'
  }];
  res.json(model);
};

exports.signup = function(req, res) {
  //give back an appropriate signup form
  console.log('country', res.locals.context.country, 'language', res.locals.context.language)
  res.render('signup/main', {
    'country': res.locals.context.country,
    'language': res.locals.context.language
  });
};
