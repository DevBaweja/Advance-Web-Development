$(document).ready(() => {
    // For sticky navigation
    $('#section-features').waypoint(
        function (direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            }
            if (direction == 'up') {
                $('nav').removeClass('sticky');
            }
        },
        {
            offset: '60px',
        }
    );

    // Scroll on buttons
    $('.scroll-to-plan').click(function () {
        $('html,body').animate({ scrollTop: $('#section-plans').offset().top }, 1000);
    });

    $('.scroll-to-start').click(function () {
        $('html,body').animate({ scrollTop: $('#section-features').offset().top }, 1000);
    });

    // Navigation
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html,body').animate(
                        {
                            scrollTop: target.offset().top,
                        },
                        1000
                    );
                    return false;
                }
            }
        });
    });

    // Animation on scroll
    $('#section-features').waypoint(
        function (direction) {
            $('.way-1').addClass('animated fadeIn');
        },
        {
            // offset:''
        }
    );

    $('#section-steps').waypoint(
        function (direction) {
            $('.way-2').addClass('animated fadeInUp');
        },
        {
            // offset:''
        }
    );

    $('#section-cities').waypoint(
        function (direction) {
            $('.way-3').addClass('animated fadeIn');
        },
        {
            // offset:''
        }
    );

    $('#section-plans').waypoint(
        function (direction) {
            $('.way-4').addClass('animated pulse');
        },
        {
            // offset:''
        }
    );

    // Mobile navigation
    $('#nav-icon').click(function () {
        var nav = $('#main-nav');
        nav.slideToggle(200);

        $('#nav-icon ion-icon').toggleAttrVal('name', 'close', 'list');
    });

    $.fn.toggleAttrVal = function (attr, A , B) {
        var toggle = $(this).attr(attr);
        if (toggle === A ) {
            $(this).attr(attr, B);
        }
        if (toggle === B) {
            $(this).attr(attr, A );
        }
    };

});
