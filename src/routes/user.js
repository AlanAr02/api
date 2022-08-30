const express = require('express')
const router = express.Router()
const { getData, postData } = require('../middlewares/user')

router.get(
    '/form',
    getData
)

router.post(
    '/form',
    postData
)

module.exports = router