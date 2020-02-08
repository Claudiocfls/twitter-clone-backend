const Tweet = require('./../models/Tweet');
const User = require('./../models/User');

class TweetsController {
  static async getAll(req, res) {
    const tweets = await Tweet.find({}).populate('author').sort('-createdAt');
    res.json(tweets);
  }

  static async create(req, res) {
    const {
      content,
    } = req.body;

    const {
      user: {
        email,
      },
    } = req;

    const user = await User.findOne({ email });

    const newTweet = await Tweet.create({
      author: user,
      content,
    });

    req.io.emit('tweet', newTweet);

    res.json(newTweet);
  }
}

module.exports = TweetsController;