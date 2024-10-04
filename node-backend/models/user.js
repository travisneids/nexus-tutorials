const bcrypt = require("bcryptjs");

const users = [];

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = bcrypt.hashSync(password, 10);
  }

  static findUser(username) {
    return users.find((user) => user.username === username);
  }

  static addUser(username, password) {
    const id = users.length + 1;
    const user = new User(id, username, password);
    users.push(user);

    return user;
  }
}

module.exports = User;
