import { encode } from "js-base64";
import User from "../model/User.js";
import transporter from "../utils/emailSend.js";
import template from "../utils/emailTemplate.js";
import dotenv from 'dotenv'

dotenv.config()

export const sendEmailLogin = async (req, res) => {
  let success = false;

  try {
    const { id } = req.params;

    let user = await User.findOne({ _id: id });

    let token = encode(user._id.toString());

    await transporter.sendMail({
      from: "burhanraja02@yahoo.com",
      to: user.basic.email,
      subject: "Verify your account with ScripVault",
      html: template(
        "Thank you for choosing <b>ScripVault</b> as your Investment Partner. Please Verify the email to login and start investing today.",
        `${proces.env.REACT_URL}/verify/${token}`
      ),
    });

    success = true;

    return res.status(200).send({
      success,
      message: "Email Successfully Sent.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};
