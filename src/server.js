const express = require('express');
const appender = require('./server/middlewares/socket');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-anwgm.mongodb.net/twitter_clone?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)
app.use(appender(io));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

require('./server/routes')(app);


app.get('/', (req,res) => {
  res.send("Application is running - Twitter Clone Back-end");
})

server.listen(3001, () => {
  console.log("> Application running on port 3000");
})