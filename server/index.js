const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors())
app.use(bodyParser.json());

const bballRouter = require('./apiRouter');
app.get('/', (req, res) => {
  res.status(200).json('Basketball api updates')
});
app.use('', bballRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌎 server running on port ${PORT}`)
});

/*
app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

app.listen(8090, () => {
    console.log('server listening on port 8090')
})*/