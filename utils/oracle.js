const config = require("../config");
const oracledb = require("oracledb");
const log = require("./log");

//oracledb.autoCommit = true;

var sql;
oracledb.getConnection(config.dbConfig, function (err, connection) {
	try {
		if (err) throw err;
		sql = connection;
		log.sucess(`Connected to ORACLE database !`);
	} catch (e) {
		log.error(`Failed to connect : ${JSON.stringify(e)}`);
	}
});

module.exports = {
	connect: () => sql,
};
