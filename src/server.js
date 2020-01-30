const express = require('express');
const routes = require('./routes');
const app = express();
app.use(routes);

app.get('/', (req,res) => {
  res.send("Application is running - Twitter Clone Back-end");
})

app.listen(3000, () => {
  console.log("> Application running on port 3000");
})