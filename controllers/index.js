'use strict';

var IndexModel = require('../models/index');
var CommentsModel = require('../models/comments');
exports.index = function(req, res) {
  var model = new IndexModel();
  res.render('index', model);
};

// exports.setLocale = function (req, res) {
//     res.cookie('locale', req.params.locale);
//     res.redirect('/');
// };

exports.comments = function(req, res) {
  var model = CommentsModel;
  res.json(model);
};

exports.signup = function(req, res) {
  //give back an appropriate signup form
  var model = {
    'country': res.locals.context.country,
    'language': res.locals.context.language
  };
  console.log('country', res.locals.context.country, 'language', res.locals.context.language);
  res.render('signup/main', model, function(err, data) {
    console.log('did itz work?', data);
    res.json({meta: "informationz", data: data});
  });
};
