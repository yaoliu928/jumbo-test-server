const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const logger = require('./utils/logger');
const routes = require('./routes');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
  logger.info(`movie app has started at port ${PORT}`);
});
