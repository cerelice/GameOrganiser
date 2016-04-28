var Models        = require('../Models');

exports.login = function(req, res) {

  switch (req.body.id_type) {
    //TODO add facebook, github, google pluse
    case 'vk':
        Models.User.findOne({ vkid: req.body.id_value }).then((user) => {
            if(user){
                res.send(200, { type: true, data: user.id });
                return;
            }else{
                Models.User.create({ vkid: req.body.id_value }).then((user) => {
                   res.send(200, { type: true, data: user.id });
                });
            }
        })
    break;
  }

}
