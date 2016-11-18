$(document).ready(function() {
    var up = 'fa fa-chevron-up pull-right',
        down = 'fa fa-chevron-down pull-right';

    var closeNav = function(e) {
        e.preventDefault();
        $('#overlay, #hamNavCont').fadeToggle(250);
        $('#hamMenuLink').toggle();
        $('#hamNav > li > ul').hide();
        $('#hamNav > li').not('.dismiss').find('a > i').attr('class', down);
    };

    $('#hamNav > li > a').not('.dismiss a').append('<i class="fa fa-chevron-down pull-right"></i>');

    $('#hamMenuLink').on('click', function(e) {
        e.preventDefault();
        $('#overlay, #hamNavCont').fadeToggle(250);
        $(this).toggle();
    });

    $('#hamNav > li > a').on('click', function(e) {
        var $i = $(this).find('i');

        e.preventDefault();
        if ($i.attr('class') === down) {
            $i.attr('class', up);
        } else if ($i.attr('class') === up) {
            $i.attr('class', down);
        }

        $(this).next('ul').slideToggle();
    });

    $('#hamNavCont .dismiss').on('click', function(e) {
        closeNav(e);
    });

    $('#overlay').on('click', function(e) {
        closeNav(e);
    });

    $('body').on('keyup', function(e) {
        // escape
        if (e.keyCode === 27) {
            closeNav(e);
        }
    });
});