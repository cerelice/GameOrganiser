var Models        = require('../Models');

exports.GetEvents = function(req, res){
    Models.User.findById(req.params.id).then((user) => {
      if(!user) res.send(204, {type: false, data: "User not found" });

      user.getEvents().then((events) => {
          res.send(200, {type: true, data: events });
      })
    });
}

exports.DeleteEvent = function(req, res){
    Models.Event.findById(req.params.id).then((event) => {
        event.destroy();
        res.send(200);
    });
}
