
// $(window).load(function() {
//     console.log("talking");
// });

$(document).ready(function () {

    // slider
    $('.slider_in').owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        lazyload: true,
        navText: false,
        nav: true,
        dots: false,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                nav: false,
                loop: true
            },
            769: {
                items: 1,
                slideBy: 1,
                nav: false,
                loop: true
            },
            1000: {
                items: 2,
                slideBy: 1,
                nav: false,
                loop: true
            }
        }
    });


    // menu element active
    $(function () {

        var url = window.location.pathname,
            urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
        $('.mainmenu a').each(function () {

            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('active');
            }
        });

    });


    // search on click

    $('.search_hold').click(function () {

        $('.search_overlay').fadeIn();
        $('.opened_in').focus();

    });

    $('.search_overlay_close').click(function () {
        $('.search_overlay').fadeOut();
        $('.opened_in').val('');
    });



    // team popup
    $('.personal_item_in').click(function () {
        $(this).siblings('.team_popup_overlay').fadeIn();
        $(this).siblings('.tm_popup_holder').fadeIn();
    });

    $('.team_popup_overlay').click(function () {
        $(this).fadeOut();
        $(this).siblings('.tm_popup_holder').fadeOut();
    });


    //arrows
    //            prev
    $('.tm_prev').click(function () {
        $('body').find('.tm_popup_holder').fadeOut();
        $('body').find('.team_popup_overlay').fadeOut();

        if ($(this).parents('.personal_item').prev().find('.tm_popup_holder').length > 0) {
            $(this).parents('.mod_team .personal_item').prev().find('.team_popup_overlay').fadeIn();
            $(this).parents('.mod_team .personal_item').prev().find('.tm_popup_holder').fadeIn();
        } else {
            $(this).parents('.mod_team .personal_item').siblings('.personal_item:last-child').find('.team_popup_overlay').fadeIn();
            $(this).parents('.mod_team .personal_item').siblings('.personal_item:last-child').find('.tm_popup_holder').fadeIn();
        }
    });


    //        next

    $('.tm_next').click(function () {
        $('body').find('.tm_popup_holder').fadeOut();
        $('body').find('.team_popup_overlay').fadeOut();

        if ($(this).parents('.personal_item').next().find('.tm_popup_holder').length > 0) {
            $(this).parents('.mod_team .personal_item').next().find('.team_popup_overlay').fadeIn();
            $(this).parents('.mod_team .personal_item').next().find('.tm_popup_holder').fadeIn();
        } else {
            $(this).parents('.mod_team .personal_item').siblings('.personal_item:last-child').find('.team_popup_overlay').fadeIn();
            $(this).parents('.mod_team .personal_item').siblings('.personal_item:last-child').find('.tm_popup_holder').fadeIn();
        }
    });

    //                close
    $('.popup_close').click(function () {
        $(this).parent('.tm_popup_holder').fadeOut();
        $(this).parent().siblings('.team_popup_overlay').fadeOut();
    });




});





