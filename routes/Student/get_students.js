const log = require("../../utils/log"),
    utils = require("../../utils/utils"),
    exception = require("../../exception/exception"),
    reg_exp = require("../../utils/reg_exp"),
	sql_utils = require("../../utils/sql_utils"),
	sql = require("../../utils/oracle");

module.exports = (app) => {
	app.post("/get_students", async (req, res) => {
        let data = "ID, NR_MATRICOL, NUME, PRENUME, AN, GRUPA, BURSA, DATA_NASTERE, EMAIL";
		try {
            if(!req.headers.order_by || !req.headers.order_by.match(reg_exp.word) || data.split(/, /).indexOf(req.headers.order_by) === -1) throw exception.INVALID_PARAM("order_by");
            if(!req.headers.order || ( req.headers.order !== "ASC" && req.headers.order !== "DESC" ) ) throw exception.INVALID_PARAM("order");
            if(!req.headers.limit || !req.headers.limit.match(reg_exp.number) || req.headers.limit > 50 ) throw exception.INVALID_PARAM("limit");
            if(req.headers.last && !req.headers.last.match(reg_exp.num_word)) throw exception.INVALID_PARAM("last");
            
			let db = sql.connect();

			//build the required querry
			let querry_string = sql_utils.PAGINATE(
				"STUDENTI",
				data,
				req.headers.order_by,
				req.headers.order,
				req.headers.last,
				req.headers.limit,
			);

			let result = await db.execute(querry_string);
			res.status(200).send(result);
		} catch (e) {
			log.error(e);
			res.status(500).send({ err: e, file: __dirname + "\\" + __filename });
		}
	});
};
