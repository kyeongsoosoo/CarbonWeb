const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/map', require('./routes/map'));

app.listen(port, () => console.log(`listening to port: ${port}`));