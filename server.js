const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const refreshTokens = [];
app.use(express.json());

// middleware to check whether user is authenticated
const auth = (req, res, next) => {
  let token = req.headers["authorization"];
  tokent = token.split(" ")[1];

  jwt.verify(token, "access", (err, user) => {
    if (!err) {
      user = req.user;
      next();
    } else {
      return res.status(404).json({ message: "user not authenticated" });
    }
  });
};

// request to create new access token using valid refresh token
app.post("/refresh", (req, res, next) => {
  const refreshToken = req.body.token;
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
      return res.json({ message: "Refresh token not found, login again" });
  }

  // If the refresh token is valid, create a new accessToken and return it.
  jwt.verify(refreshToken, "refresh", (err, user) => {
      if (!err) {
          const accessToken = jwt.sign({ username: user.name }, "access", {
              expiresIn: "10m"
          });
          return res.json({ success: true, accessToken });
      } else {
          return res.json({
              success: false,
              message: "Invalid refresh token"
          });
      }
  });
});

// protected route calls
app.post("/protected", auth, (req, res) => {
  res.send("inside protected route");
});

// request to create access token and refresh tokens
app.post("/login", (req, res) => {
  const { user } = req.body;
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  const accessToken = jwt.sign(user, "access", { expiresIn: "10m" });
  const refreshToken = jwt.sign(user, "refresh", { expiresIn: "20m" });
  refreshTokens.push(refreshToken);

  return res.status(200).json({
    accessToken,
    refreshToken,
  });
});

// app listening at port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
