const {Pool,Client} = require("pg");

const dbClient = new Client ({
    user: "postgres",
    password: "P123",
    host: "localhost",
    port: 5432,
    database: "Volei_CSM"
});

module.exports = dbClient;

dbClient.connect();


