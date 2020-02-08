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

app.post('/hooks/post-registration', (req,res) => {
  console.log(req.body);
  res.send('ok');
})

require('./server/routes')(app);


app.get('/', (req,res) => {
  console.log("Request made on initial route");
  res.send("Application is running - Twitter Clone Back-end");
})

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`> Application running on port ${port}`);
})