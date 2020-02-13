const express = require('express');
const axios = require('./../utils/axios');

const Movie = require('./../models/Movie')
const responseFormatter = require('./../utils/responseFormatter')

const api_key = process.env.api_key;
const router = express.Router()

router.get('/:id',(req, res) => {
    const id = req.params.id;
    axios({
        method: 'get',
        url: '/movie/' + id,
        params: {
            api_key: api_key
        }
    })
        // .then(response => res.send(response.data))
        .then(response => responseFormatter(res, 200, null, new Movie(response)))
        .catch(err => console.log(err))
})

module.exports = router;