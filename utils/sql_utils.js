let LIMIT = (querry, n) => `SELECT * FROM ( ${querry} ) WHERE ROWNUM < ${n}`;

let PAGINATE = (table, data, order_by, order, last, limit) =>
	LIMIT(`SELECT ${data} FROM ${table} ${last ? ` WHERE ( ${order_by} ${order === "DESC" ? "<" : ">"} ${last} )` : ``} ORDER BY ${order_by} ${order}`, limit);

module.exports = {
	/**Limits the amount of data returned from a table in sql
	 * @param querry The string containing the querry you wish to limit
	 * @param limit How many elements shall be returned from the database ?
	 */
	LIMIT: LIMIT,

	/**Returna a pae of dara from a table
	 * @param table The name of the table
	 * @param data A string containing the data required for retival
	 * @param order_by A string contaiing the parameter from the table you wish to order the data by
	 * @param order ASC sorting or DESC sorting
	 * @param last previous entry, undefined if none
	 * @param limit How many elements do you wish to return from the database
	 */
	PAGINATE: PAGINATE,
};
