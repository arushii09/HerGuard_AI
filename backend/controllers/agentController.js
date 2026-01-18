const remoteApi = require("../services/remoteApi");

exports.evaluateRisk = async (req, res) => {
  try {
    const { time, token } = req.body;

    const risk = time === "night" ? "HIGH" : "LOW";

    if (risk === "HIGH") {
      await remoteApi.notify(
        { message: "High risk detected" },
        token
      );
    }

    res.json({
      risk,
      actionTaken: risk === "HIGH" ? "NOTIFIED" : "NONE"
    });

  } catch (error) {
    res.status(500).json({
      error: "Agent evaluation failed",
      details: error.message
    });
  }
};
