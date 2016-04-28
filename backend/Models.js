var UserModel     = require('./models/User.model'),
    EventModel    = require('./models/Event.model');

var dData = require('./defaultData');

//relations
//sync with database
UserModel
    .sync({force: true})
    .then(() => { return UserModel.hasMany(EventModel, {constraints: false}); })
    .then(() => { return EventModel.sync({force: true}); })
    .then(() => { dData.forEach((el) => { EventModel.create(el); }); });
//export models namespace
module.exports = {
  User: UserModel,
  Event: EventModel
}
