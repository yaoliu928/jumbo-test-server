const responseFormatter = require('./../utils/responseFormatter');

module.exports = (error, res) => {
  if (error.response) {
    const { data } = error.response;
    return responseFormatter(res, data.cod, data.message, null);
  }
  return null;
};
