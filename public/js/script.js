// bringing out mobile nav menu

$(".hamburger").on('click', function() {
    $(".mobile-nav").slideToggle();
});

// making third boxes mobile responsive

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

// progress bar demo

function changeProgressBar () {

    $(".goal-box .sold").replaceWith('<p style="color: grey"><span>SOLD:</span> 41 items&nbsp;&nbsp;&nbsp;</p>');
    $(".progress-bar-button").replaceWith('<p class="bought">PRE-ORDERED FOR £380</p><p class="confirmation">This item has been added to your cart.<br>We\'ll notify you when this design goes into production.</p>');
    $(".goal-box img").attr('src', "../static/public/images/progress2.png");
    return false;
};

$(".progress-bar-button").on('click', function() {
    var input = this;
    input.disabled = true;

    changeProgressBar();
});
