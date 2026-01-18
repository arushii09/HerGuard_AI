require("dotenv").config();
const twilio = require("twilio");
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const express = require("express");
const cors = require("cors");
const auth = require("./auth");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup", auth.signup);
app.post("/login", auth.login);

app.listen(3000, () => {
  console.log("Guardian backend running on port 3000");
});
const db = require("./db");

app.post("/contacts", async (req,res)=>{
  await db.query(
    "INSERT INTO trusted_contacts(user_id,name,phone,priority) VALUES($1,$2,$3,$4)",
    [req.body.user_id, req.body.name, req.body.phone, req.body.priority]
  );
  res.send("Contact added");
});
app.post("/notify", async (req, res) => {
  const { user_id, message } = req.body;

  await db.query(
    "INSERT INTO notifications(user_id, message, status) VALUES($1,$2,'pending')",
    [user_id, message]
  );

  await db.query(
    "INSERT INTO agent_logs(user_id, event, risk_level) VALUES($1,'notification_queued','high')",
    [user_id]
  );

  res.send("Notification queued");
});

setInterval(async () => {
  const pending = await db.query(
    "SELECT n.id, n.user_id, n.message, t.phone FROM notifications n JOIN trusted_contacts t ON n.user_id=t.user_id WHERE n.status='pending' AND t.priority=1"
  );

  for (let n of pending.rows) {
    await client.messages.create({
      body: n.message,
      from: process.env.TWILIO_PHONE,
      to: n.phone
    });

    await db.query(
      "UPDATE notifications SET status='sent' WHERE id=$1",
      [n.id]
    );
  }
}, 10000); // runs every 10 seconds
