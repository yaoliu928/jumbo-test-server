const express = require('express');
const axios = require('./../utils/axios');

const Popular = require('./../models/Popular');
const responseFormatter = require('./../utils/responseFormatter');

const { apiKey } = process.env;
const router = express.Router();

router.get('/', (req, res, next) => {
  const { keyWord, page } = req.query;
  axios({
    method: 'get',
    url: '/search/movie',
    params: {
      query: keyWord,
      api_key: apiKey,
      page,
    },
  })
    .then((response) => responseFormatter(
      res, 200, null, response.data.results.map(
        (movie) => new Popular(movie),
      ),
    ))
    .catch((err) => next(err));
});

module.exports = router;
