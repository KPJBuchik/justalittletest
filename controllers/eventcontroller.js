const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Event
            .find(req.query)
            .sort({ date: -1 })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Event
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
