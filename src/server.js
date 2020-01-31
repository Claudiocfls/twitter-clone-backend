const express = require('express');
const appender = require('./server/middlewares/middleware');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-anwgm.mongodb.net/twitter_clone?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(appender("uhuuul"));
require('./server/routes')(app);


app.get('/', (req,res) => {
  res.send("Application is running - Twitter Clone Back-end");
})

app.listen(3000, () => {
  console.log("> Application running on port 3000");
})