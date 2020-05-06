const color = require("../colors");

let date_now = () => {
	let date_now = Date().split(/\s/)[0];
	for (let i = 1; i <= 4; i++) {
		date_now += "_" + Date().split(/\s/)[i];
	}
	return color.white + date_now;
};

module.exports = {
	date_now: date_now,
	sucess: (text) => {
		console.log("[" + date_now() + "] " + color.green + text + color.white);
	},
	error: (text) => {
		console.log("[" + date_now() + "] "  + color.red + text + color.white);
	},
	worker: (text) => {
		console.log("[" + date_now() + "] "  + color.yellow + text + color.white);
	},
};
