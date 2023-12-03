const User = require("../model/User");

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
      user = await User.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "No user found" });
      }
      return res.status(200).json({ user });
    };
    

const addUser = async (req, res, next) => {
    const { ID,first_name,last_name,email,gender,image,domain,available} = req.body;
    let user;
    try {
      user = new User({
        ID,
       first_name,
       last_name,
        email,
        gender,
        image,
        domain,
        available
    
   
      });
      await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Unable to add the user" });
  }
  return res.status(201).json({ user });
};

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const {ID,first_name,last_name,email,gender,image,domain,available} = req.body;
    let user;
    try {
      user = await User.findByIdAndUpdate(id, {
       ID,
        first_name,
        last_name,
         email,
         gender,
         image,
         domain,
         available
      });
    user = await user.save();
    } catch (err) {
      console.log(err);
    }
    if (!user) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ user });
  };


  const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
      user= await User.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    }
    if (!user) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "User Successfully Deleted" });
  };


exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;


