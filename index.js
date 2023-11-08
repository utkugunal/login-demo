import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (request, response) => {
  console.log("Someone wants the root route!");
  console.log("Welcome to our site! 😎");
});

app.get("/login", function (req, res) {
  console.log("serving login.html...");
  res.sendFile(path.join(__dirname, "/login.html"));
});
