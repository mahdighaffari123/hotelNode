const createUser = (body, User) => {
  const newUser = User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
    passwordConfirm: body.passwordConfirm,
  });
  return newUser;
};

module.exports = { createUser };
