const Tweet = require('./../models/Tweet');

class LikeController {
  static async like(req,res) {
    const { id: tweetId } = req.body;
    const tweet = await Tweet.findById(tweetId);
    
    tweet.set({ likes: tweet.likes + 1});
    await tweet.save();

    req.io.emit('like', tweet);

    res.json(tweet);
  }
}

module.exports = LikeController;