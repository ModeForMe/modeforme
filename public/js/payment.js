var clientToken;

$( document ).ready(function() {
    $.ajax({
        url: "/braintree_token",
        success: function(token) {
            clientToken = token;
            braintree.setup(clientToken, "dropin", {
                container: "payment-form"
            });
        }
    });
});
