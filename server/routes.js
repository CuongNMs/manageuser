
module.exports = function(app) {
  let model = require('./model');

  app.route('/login')
  .post(model.login);

  app.route('/users')
    .get(model.get)
    .post(model.store);

  app.route('/users/:user_id')
    .get(model.detail)
    .put(model.update)
    .delete(model.delete);
};

