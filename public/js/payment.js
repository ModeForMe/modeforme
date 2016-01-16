$( document ).ready(function() {
    $.ajax({
        url: "/braintree_token",
        success: function(clientToken) {
            braintree.setup(clientToken, "dropin", {
                container: "payment-form"
            });
        }
    });
});
