
class UserController {
  static async create(req, res) {
    console.log("user creation route");
    res.send('ok');
  }
}

module.exports = UserController;
