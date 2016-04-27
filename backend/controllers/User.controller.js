var Models        = require('../Models');

exports.login = function(req, res) {

  switch (req.body.id_type) {
    case 'vk':
        Models.User.findOne({ vkid: req.body.id_value }).then((user) => {
            console.log(user);
        })
    break;

  }

}
