'use strict';
module.exports = function() {
  return function(req, res, next) {
    var locale = req.headers['X-Locale'] || 'en-US'; //req.cookies && req.cookies.locale;
    res.locals.context = {
      locality: locale,
      country: locale.substr(3, 2),
      language: locale.substr(0, 2)
    };
    next();
  };
};
