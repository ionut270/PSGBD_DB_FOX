const express = require('express'),
    config = require('./config'),
    log = require('./utils/log'),
    cors = require('cors');

//Initialize the server app
const app = express();

//cross origin acess
app.use(cors());

//start listening on the port
app.listen(config.port, () => log.sucess(`Server up and running on ${config.server}:${config.port}`));

//connect to the database
require("./utils/oracle");

//routes
require("./routes/Student/get_students")(app);