$(function () {
    // "use strict";

    // let open = $('#open');
    // let close = $('#close');
    //
    // open.on('click', function () {
    //     $("#message").fadeIn(3000);
    // });
    //
    // close.on('click', function () {
    //     $("#message").fadeOut(3000);
    // });

    $('.list_item:first').on('mouseenter | mouseleave', function () {
        $(this).toggleClass('button-active');
    });

    $('.list_item:eq(1)').on('click', function () {
        $('.image:odd').fadeToggle('slow');
    });

    $('.list_item:last').on('click', function () {
        let image = $('.image:even');
        image.animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 3000);
    });
});
