const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Signup = async(req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashpassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      "sumanth",
      {
        expiresIn: "8d",
      }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, token });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  Signup,
  Login,
};