const Tweet = require('./../models/Tweet');

class TweetsController {
  static async create(req, res) {
    const {
      author,
      content,
    } = req.body;

    const newTweet = await Tweet.create({
      author,
      content,
    });

    res.json(newTweet);
  }
}

module.exports = TweetsController;