$(document).ready(function(){

    $('.slider').slick({
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        variableWidth: true,
        arrows:true,
        nextArrow: '.project__next',
        prevArrow: '.project__prev',
        response: [
            {
                breakpoints: 768,
                settings: {
                    arrow: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 3
                }
            },
            {
                breakpoints: 480,
                settings: {
                    arrow: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    })

    $(function() {
        function init() {
            $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
            $('.nav__item').on('click', removeClass);
            // $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
        };

        function toggleMenuIcon() {
            $(this).toggleClass('menu-icon--open');
            $('[data-element="toggle-nav"]').toggleClass('nav--active');

            $(this).toggleClass('nav__link--plus nav__link--minus');
            // $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
        };

        function removeClass() {
            $('[data-element="toggle-nav"]').removeClass('nav--active');
            $('[data-behaviour="toggle-menu-icon"]').removeClass('menu-icon--open nav__link--plus nav__link--minus');
        }



        init()
    });

    /**
     * Скролл карты
     */
    document.addEventListener('click', function(e) {
        var map = document.querySelector('#map-wrap iframe')
        if(e.target.id === 'map-wrap') {
            map.style.pointerEvents = 'all'
        } else {
            map.style.pointerEvents = 'none'
        }
    })


    /**
     *  Scroll to up
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });




});