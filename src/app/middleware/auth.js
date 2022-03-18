const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(403).send("Usuário não cadastrado!");
  }

  try {
    const tokenVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = tokenVerified;
  } catch (err) {
    return res.status(401).send("Token inválido!");
  }
  return next();
};

module.exports = verifyToken