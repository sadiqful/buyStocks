import { decode } from "js-base64";
import User from "../model/User.js";

export const verifyToLogin = async (req, res) => {
  let success = false;
  try {
    let { token } = req.params;

    let decodedToken = decode(token);

    let user = await User.findOne({ _id: decodedToken });

    if (!user) {
      return res.status(404).send({
        success,
        message: "User Not Found.",
      });
    }

    user = await User.findOneAndUpdate(
      { _id: decodedToken },
      {
        $set: {
          verified: true,
        },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: "Successfully Verified.",
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};
