var app = require('../server');

var dataSource = app.dataSources.postgresql;

/*

Automigrate all models

*/

if (dataSource.connected) {
	migrate();
} else {
	dataSource.once('connected', function () {
		migrate();
	});
}

function migrate() {

	dataSource.automigrate('Alarm', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});


	dataSource.automigrate('MissionResponse', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});

	dataSource.automigrate('Expence', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});

	dataSource.automigrate('Mission', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});

	dataSource.automigrate('SARUser', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});

	dataSource.automigrate('Tracking', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});

	dataSource.automigrate('Attendants', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});

	dataSource.automigrate('AccessToken', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});

	dataSource.automigrate('ACL', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});
	dataSource.automigrate('RoleMapping', function (err) {
		if (err) throw err;
		dataSource.disconnect();
	});

}
