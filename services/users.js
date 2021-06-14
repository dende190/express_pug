const mysqlLib = require('../lib/mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

usersService = {
  create: async function(data) {
    const email = data.email;
    const emailConfirm = data.emailConfirm;
    const password = data.password;
    const passwordConfirm = data.passwordConfirm;
    const birthDate = `${data.year}-${data.month}-${data.day}`;

    if (email !== emailConfirm || password !== passwordConfirm) {
      return false;
    }

    const passwordWithBcrypt = await bcrypt.hash(password, saltRounds);
    const userId = await mysqlLib.insert(
      {
        firstname: data.firstname,
        lastname: data.lastname,
        email: email,
        password: passwordWithBcrypt,
        birth_date: birthDate,
        gender: data.gender,
      },
      'users'
    ).then(
      userId => userId
    ).catch(err => console.log(err));

    if (!userId) {
      return false;
    }

    return userId;
  },
};

module.exports = usersService;
