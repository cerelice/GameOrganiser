var UserModel     = require('./models/User.model');

//relations
//sync with database
UserModel.sync({force: true});
//export models namespace
module.exports = {
  User: UserModel
}
