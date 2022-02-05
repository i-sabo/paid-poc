var api = require('../service/api.js')


var callback = function (req, res) {

    api.getAll(function (error, data) {

        if (error) {

            res.render('error', {
                error: error
            });

        } else {

            res.render('itemList', {
                title: "Hello from React-Boot-Hello",
                items: data
            });

        }

    });

};

module.exports = callback;
