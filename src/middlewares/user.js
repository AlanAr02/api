const model = require("../models/match")

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        res.send({
            docs
        })
    })
}

exports.postData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        res.send({ 
            docs
        })
    })
}