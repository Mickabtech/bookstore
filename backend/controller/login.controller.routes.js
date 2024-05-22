const Usermod = require('../models/userModel.js');

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await Usermod.findOne({ email: email });
    
    if (user) {
      // Here you should compare hashed passwords
      // For example: using bcrypt.compare(password, user.password)
      if (user.password === password) {
        res.json("Successful");
      } else {
        res.status(401).json("Password Incorrect");
      }
    } else {
      res.status(404).json('User does not exist');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signin
};
