const Usermod = require('../models/userModel.js')


const signup = async (req, res) =>{

  try {

    if (!req.body.firstname || !req.body.lastname || !req.body.email|| !req.body.password){

      return res.status(400).json({
        message: "Please fill in the name, email and password"
      })
  
  }

   const userReg =await Usermod.create(req.body)
    res.status(200).json(userReg)
    
  } catch (error) {
    res.status(500).json({message: error.message})
  }
 

}



module.exports = {
  signup,
}