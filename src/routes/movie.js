const express = require('express');
const axios = require('./../utils/axios');

const Movie = require('./../models/Movie');
const responseFormatter = require('./../utils/responseFormatter');

const { apiKey } = process.env;
const router = express.Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  axios({
    method: 'get',
    url: `/movie/${id}`,
    params: {
      api_key: apiKey,
    },
  })
    .then((response) => responseFormatter(res, 200, null, new Movie(response)))
    .catch((err) => next(err));
});

module.exports = router;
