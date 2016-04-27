var db        = require('../db.config'),
    Sequelize = require('sequelize');

var User = db.define('users', {
    vkid: { type: Sequelize.STRING, allowNull: true }
});

module.exports = User;
