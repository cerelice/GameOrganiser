var Sequelize = require('sequelize');
// initialize database connection
module.exports = new Sequelize('gorganiser', 'root', 'root', {
		host: 'localhost',
		port: '3306',
		isolationLevel: 'SERIALIZABLE',
		logging: console.log,
		dialect: 'mysql',
    benchmark: true,
		dialectOptions: {
			 socketPath: '/var/run/mysqld/mysqld.sock'
	 	}
});
