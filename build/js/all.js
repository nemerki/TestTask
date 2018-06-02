

(function ($) {

    /*[ Load page ]
    ===========================================================*/


    /*[ Back to top ]
    ===========================================================*/


    /*[ Show header dropdown ]
    ===========================================================*/
    $('.js-show-header-dropdown').on('click', function(){
        $(this).parent().find('.header-dropdown')
    });

    var menu = $('.js-show-header-dropdown');
    var sub_menu_is_showed = -1;

    for(var i=0; i<menu.length; i++){
        $(menu[i]).on('click', function(){

            if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                sub_menu_is_showed = -1;
            }
            else {
                for (var i = 0; i < menu.length; i++) {
                    $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                }

                $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                sub_menu_is_showed = jQuery.inArray( this, menu );
            }
        });
    }

    $(".js-show-header-dropdown, .header-dropdown").click(function(event){
        event.stopPropagation();
    });

    $(window).on("click", function(){
        for (var i = 0; i < menu.length; i++) {
            $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
        }
        sub_menu_is_showed = -1;
    });


    /*[ Fixed Header ]
    ===========================================================*/
    var posWrapHeader = $('.topbar').height();
    var posWrapHeader2 = $('.logoCenter').height();
    var toplam = posWrapHeader + posWrapHeader2-1;
    var header = $('.container-menu-header');

    $(window).on('scroll',function(){

        if($(this).scrollTop() >= toplam) {
            $('.header').addClass('fixed-header');
            $(header).css('top',-toplam);

        }
        else {
            var x = - $(this).scrollTop();
            $(header).css('top',x);
            $('.header').removeClass('fixed-header');
        }

        if($(this).scrollTop() >= 200 && $(window).width() > 992) {
            $('.fixed-header2').addClass('show-fixed-header2');
            $('.header2').css('visibility','hidden');
            $('.header2').find('.header-dropdown').removeClass("show-header-dropdown");

        }
        else {
            $('.fixed-header2').removeClass('show-fixed-header2');
            $('.header2').css('visibility','visible');
            $('.fixed-header2').find('.header-dropdown').removeClass("show-header-dropdown");
        }

    });

    /*[ Show menu mobile ]
    ===========================================================*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.wrap-side-menu').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu').slideToggle();
            $(this).toggleClass('turn-arrow');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.wrap-side-menu').css('display') == 'block'){
                $('.wrap-side-menu').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }
            if($('.sub-menu').css('display') == 'block'){
                $('.sub-menu').css('display','none');
                $('.arrow-main-menu').removeClass('turn-arrow');
            }
        }
    });









})(jQuery);
$(function () {
    $('.galery-carusel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        }
    })

    $('.popular-carusel').owlCarousel({
        loop: true,
        nav: true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        items: 1
    })
});