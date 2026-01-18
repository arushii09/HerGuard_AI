const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");

exports.signup = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    await db.query(
      "INSERT INTO users(email, password) VALUES($1, $2)",
      [req.body.email, hash]
    );

    res.send("User created");
  } catch (err) {
  console.error(err);
  res.status(500).send(err.message);
}
};

exports.login = async (req, res) => {
  const user = await db.query(
    "SELECT * FROM users WHERE email=$1",
    [req.body.email]
  );

  if (!user.rows.length) return res.status(400).send("No user");

  const ok = await bcrypt.compare(
    req.body.password,
    user.rows[0].password
  );

  if (!ok) return res.status(401).send("Wrong password");

  const token = jwt.sign(
    { id: user.rows[0].id },
    "guardian_secret"
  );

  res.json({ token });
};
