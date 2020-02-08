const User = require('./../models/User');
const { generateRandomUsername } = require('./../utils/random-names.utils');

class UserController {
  static async create(req, res) {
    const {
      user: {
        email,
      },
    } = req.body;

    const re = /^(.*?)@/g;

    try {
      const newUser = await User.create({
        email,
        name: re.exec(email)[0],
        username: generateRandomUsername(),
      });

      res.json(newUser);
    } catch(err) {
      console.error(err);
    }
    res.status(400).send("error");
  }
}

module.exports = UserController;
