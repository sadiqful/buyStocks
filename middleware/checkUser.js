import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

const checkUser = async (req, res, next) => {
  let success = false;
  try {
    if (!req.headers.authorization) {
      return res.status(403).send({
        success,
        message: "Unauthorized access",
      });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(403).send({
        success,
        message: "Unauthorized access",
      });
    }

    const data = jwt.decode(token, process.env.JWT_SECRET);
    req.user = data.user;

    next();
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

export default checkUser;
