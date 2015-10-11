var connection = require("./database.js");

module.exports = {

    getDesignerInfo: function (designerId, callback) {
        connection.query("select * from designers where id = " + designerId, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                callback(err, data);
            }
        });
    }

}
