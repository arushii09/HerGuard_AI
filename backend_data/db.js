const { Pool } = require("pg");

module.exports = new Pool({
  user: "guardian_user",
  password: "guardian123",
  host: "localhost",
  port: 5432,
  database: "guardian"
});
