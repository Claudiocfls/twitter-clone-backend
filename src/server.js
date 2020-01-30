const express = require('express');
const routes = require('./server/routes/routes');
const middleware = require('./server/middlewares/middleware');

const app = express();
app.use(middleware);
app.use(routes);


app.get('/', (req,res) => {
  res.send("Application is running - Twitter Clone Back-end");
})

app.listen(3000, () => {
  console.log("> Application running on port 3000");
})