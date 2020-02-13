const express = require('express');
const axios = require('./../utils/axios');

const Popular = require('./../models/Popular');
const responseFormatter = require('./../utils/responseFormatter');

const { apiKey } = process.env;
const router = express.Router();

router.get('/', (req, res) => {
  const { page } = req.query;
  axios({
    method: 'get',
    url: '/discover/movie',
    params: {
      sort_by: 'popularity.desc',
      api_key: apiKey,
      page,
    },
  })
    .then((response) => responseFormatter(
      res, 200, null, response.data.results.map(
        (movie) => new Popular(movie),
      ),
    ))
    .catch(() => res.status(404).json('movie not found'));
});

module.exports = router;
