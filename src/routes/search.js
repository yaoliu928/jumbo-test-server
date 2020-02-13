const express = require('express');
const axios = require('./../utils/axios');

const Popular = require('./../models/Popular');
const responseFormatter = require('./../utils/responseFormatter');

const { API_KEY } = process.env;
const router = express.Router();

router.get('/', (req, res) => {
  const { keyWord, page } = req.query;
  axios({
    method: 'get',
    url: '/search/movie',
    params: {
      query: keyWord,
      api_key: API_KEY,
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
