$(".lazyload").each(function(idx){
    var i = idx + 1;
    var elem = $(this);

    $(window).scroll(function () {
        fadeIn();
    });

    $(window).load(function() {
        fadeIn();
    });

    function fadeIn() {
        var windowHeight = window.innerHeight;
        var scrollHeight = $(window).scrollTop();
        var fromTop = elem.offset().top;
        var elemPos = windowHeight + scrollHeight - fromTop.toFixed(0);

        if (elemPos > 0){
            $(elem).addClass('active');
        };
    }
});
