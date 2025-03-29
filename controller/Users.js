const users = require("../model/UserModel");

exports.getUsersList = async (req, res) => {
  try {
    const userList = await users.find({});
    res.json(userList);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getUserDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const userList = await users.findOne({ _id: id });
    if (userList) {
      res.json(userList);
    } else {
      res.json({
        message: "User Not Founddd",
        error: "Kem API call karyo",
        id: id,
      });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await users.deleteOne({ _id: id });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const userExist = await users.findOne({ email: req.body.email });
    if (userExist) {
      return res.json({ message: "User Already Exist" });
    }
    const user = await users.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.updateUserDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const userList = await users.updateOne({ _id: id }, { $set: req.body });
    if (userList.modifiedCount == 1) {
      res.json({ message: "Successfully Modified" });
    } else {
      res.json({
        message: "User Not Founddd",
        error: "Kem API call karyo",
        id: id,
      });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
