const Tweet = require('./../models/Tweet');

class TweetsController {
  static async getAll(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt');
    res.json(tweets);
  }

  static async create(req, res) {
    const {
      author,
      content,
    } = req.body;

    const newTweet = await Tweet.create({
      author,
      content,
    });

    req.io.emit('tweet', newTweet);

    res.json(newTweet);
  }
}

module.exports = TweetsController;