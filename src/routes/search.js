const express = require('express');
const axios = require('./../utils/axios');

const Popular = require('./../models/Popular');
const responseFormatter = require('./../utils/responseFormatter');

const api_key = process.env.api_key;
const router = express.Router();

router.get('/', (req, res) => {
    const { key_word, page }= req.query
    axios({
        method: 'get',
        url: '/search/movie',
        params: {
            query: key_word,
            api_key: api_key,
            page: page,
        }
    })
        .then(response => responseFormatter(res, 200, null, response.data.results.map(movie => new Popular(movie))))
        // .then(response => {res.send(new Popular(response.data.results[16]))})
        // .then(response => {res.send((response.data.results[16]))})
        .catch(err => res.send(err));
})

module.exports = router;