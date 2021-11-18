  const jwt = require("jsonwebtoken");
const config = require("../data/authConfig.js")

// Function that checks for token(checks if you are signed in)
// You will see this function in every route that requires authentication
function verifyToken (req, res, next) {
  console.log(req)
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken
};
module.exports = authJwt;