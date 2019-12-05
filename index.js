const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const Routes = require('./src/routes');
app.use(Routes);

app.use(morgan('combined'));
app.use(cors());

app.listen(PORT, () => {
  console.log('server started');
});
