const express = require('express');
const serverless = require("serverless-http");
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello World! one'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports.handler = serverless(app);