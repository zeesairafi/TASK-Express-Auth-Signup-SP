const Shop = require('../../models/User');
const vcrypt = require("bcrypt");
const user = require('jsonwebtoken');
const {JWT_SECRET,JWT_EXP} = require("../..config/keys");



exports.signUp = async (req, res) => {
  try {
  const saltRounds = 10
 const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
 req.body.password = hashedPassword;
 const newUser = await User.create(req.body)
 //to identify whats inside the token 
 const payload = {
     username: newUser.username,
     id: user.id,
     exp: Date.now() + JWT_EXP,
 }
 const token = jwt.sign(payload, JWT_SECRET)
 res.status(201).json({token: token})
    
  } catch (error) {
    next(error);
  }
};
