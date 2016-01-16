$( document).ready(function() {
    var item = $(".product-title").html();
    var designer = $("#designer").html();
    var price = $("#price").html();
    var image = $("#product-image").attr("src");

    $("#purchase-item").val(item);
    $("#purchase-designer").val(designer);
    $("#purchase-price").val(price);
    $("#purchase-image").val(image);

});
