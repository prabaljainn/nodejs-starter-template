const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jwt");
const dotenv = require("dotenv");
dotenv.config({
  path: "../.env",
});

const saltRounds = 10;
const signjwt = (id) => {
  token = new jwt.WebToken(
    JSON.stringify({ id }),
    JSON.stringify({ typ: "JWT", alg: "HS256" })
  );
  // ENV mein dalna hai
  console.log(token.serialize(process.env.hmackey));
  return token;
};
exports.login = async (req, res, next) => {
  const { phone, password } = req.body;
  const existingUser = await User.findOne({ phone: phone });
  if (!existingUser) {
    res.status(400).json({ mess: "User not found" });
  } else {
    const hashedPassword = existingUser.password;
    bcrypt.compare(password, hashedPassword, function (err, result) {
      if (result) {
        //sign jwt
        const token = signjwt(existingUser._id);
        res.status(200).json({
          mess: "login successful",
          data: {
            token,
            User: existingUser,
          },
        });
      } else {
        res.status(400).json({ mess: "password Incorrect" });
      }
    });
  }
};

exports.protect = async (req, res, next) => {};

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Store hash in your password DB.
});

bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
  // result == false
});
