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
    // console.log("Hey changing")
    $(".goal-box").replace();
};

$(".join-waiting-list").click(changeProgressBar());
