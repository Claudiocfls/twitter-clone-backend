const express = require('express');
const appender = require('./server/middlewares/middleware');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-anwgm.mongodb.net/twitter_clone?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.use(appender("uhuuul"));
require('./server/routes')(app);


app.get('/', (req,res) => {
  res.send("Application is running - Twitter Clone Back-end");
})

app.listen(3001, () => {
  console.log("> Application running on port 3000");
})