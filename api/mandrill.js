var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(process.env.MANDRILLKEY);

module.exports = {

    sendPurchaseConfirmation: function sendEmail(email, callback) {
        var data = {
            'from_email': 'msmichellegar@gmail.com',
            'to': [{
                'email': email,
                'name': 'Client',
                'type': 'to'
            }],
            'autotext': 'true',
            'subject': 'Thank you for your purchase!',
            'html': 'Your purhase has been successful.'
        };
        mandrill_client.messages.send({"message": data, "async": false},function(result) {
            console.log("Result ", result);
            callback();
        }, function(e) {
            console.log("Error " + e.message);
        });
    }

};
