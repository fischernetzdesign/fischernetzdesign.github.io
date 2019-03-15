$(document).ready(function () {
    //Smooth scroll fuer Anker
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

    $(document).ready(function(){
        $("#mehrLesen").on("hide.bs.collapse", function(){
            $(".mehrLesen-btn").html('- mehr lesen -');
        });
        $("#mehrLesen").on("show.bs.collapse", function(){
            $(".mehrLesen-btn").html('- weniger lesen -');
        });
    });

    $(window).resize(function () {
        if ($(window).width() <= 992) {
            $('.nav a').on('click', function(){
                $('.navbar-toggle').click();
            });
        } else {

        }
    });

});
