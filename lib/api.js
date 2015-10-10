var connection = require("./database.js");

module.exports = {

    getDesignerInfo: function (designerId) {
        console.log(designerId);
        connection.query("SELECT * from designers", function (err, rows) {
            console.log("rows", rows);
        });
    }
}
