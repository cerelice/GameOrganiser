var db        = require('../db.config'),
    Sequelize = require('sequelize');

var Event = db.define('event', {
    description: { type: Sequelize.STRING, allowNull: false },
    date: { type: Sequelize.DATE, allowNull: false },
    is_skip: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
});

module.exports = Event;
