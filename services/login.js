const mysqlLib = require('../lib/mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

loginService = {
  authUser: async function({email, password}) {
    const user = await mysqlLib.getRow(
      'SELECT * FROM users WHERE email = ? AND status = 1',
      [email]
    ).then(
      userResult => userResult
    );

    if (!user) {
      return false;
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return false;
    }

    return user.id;
  },
};

module.exports = loginService;
