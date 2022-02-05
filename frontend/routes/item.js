var api = require('../service/api.js')


var callback = function (req, res) {

    api.getItem(req.params.id, function (error, obj) {

        if (error) {

            res.render('error', {
                error: error
            });

        } else {

            res.render('item', {
                title: obj.name,
                item: obj
            });

        }

    });

};

module.exports = callback;
