const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const logger = require('./utils/logger');
const routes = require('./routes');
const notFoundHandler = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.port || 3050;

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', routes);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  logger.info(`movie app has started at port ${PORT}`);
});
