var keystone = require('keystone');

exports = module.exports = function(req, res) {
  
  var view   = new keystone.View(req, res);
  var locals = res.locals;
  
  locals.section = 'home';

  view.query('page', keystone.list('page').model.findOne({slug: 'home'}));
  view.query('work', keystone.list('pieces').model.find().sort({created: -1}));
  
  view.render('home');
  
};
