const axios = require("axios");

const BASE_URL = "https://entanglingly-subrepent-miriam.ngrok-free.dev";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" }
});

module.exports = {
  signup: (data) => api.post("/signup", data),
  login: (data) => api.post("/login", data),
  getContacts: (token) =>
    api.get("/contacts", {
      headers: { Authorization: `Bearer ${token}` }
    }),
  notify: (data, token) =>
    api.post("/notify", data, {
      headers: { Authorization: `Bearer ${token}` }
    })
};
