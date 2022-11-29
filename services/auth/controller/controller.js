const User = require("../../user/model/userModel");
const { createUser } = require("../buisnessLogic/bl");

exports.register = async (req, res, next) => {
  try {
    const { body } = req;
    const newUser = await createUser(body, User);

    res.status(200).json({
      status: true,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: true,
      data: {
        error,
      },
    });
  }
};
