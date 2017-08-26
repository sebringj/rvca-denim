$(window).scroll(function() {
    stickyNav();
});

$(function() {
  stickyNav();
});

function stickyNav() {
    var scrollDistance = $(document).scrollTop();

    if (scrollDistance > 37){
        $(".nav").addClass('sticky');
    } else {
        $(".nav").removeClass('sticky');
    };
}
