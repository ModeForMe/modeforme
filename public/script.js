$(".hamburger").on('click', function() {
    $(".mobile-nav").slideToggle();
});

$(window).on('resize', function() {
    if ($(window).width() < 900) {
        $("a").removeClass('col-3');
    }
    if ($(window).width() > 900) {
        $(".addclass").addClass('col-3');
    }
});

$(document).ready(function() {
    if ($(window).width() < 900) {
        $("a").removeClass('col-3');
    }
    if ($(window).width() > 900) {
        $(".addclass").addClass('col-3');
    }
});
