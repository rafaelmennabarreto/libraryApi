const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const env = require('dotenv');

const app = express();
const PORT = 3333;

env.config();

app.use(bodyParser.json());

app.use(morgan('combined'));
app.use(cors());

const Routes = require('./src/routes');
app.use(Routes);

app.listen(PORT, () => {
  console.log('server started on port ' + PORT);
});
