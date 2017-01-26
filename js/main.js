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

    $('#hamNav > li > a').not('.dismiss a, .noChildren a')
        .append('<i class="fa fa-chevron-down pull-right"></i>');

    $('#hamMenuLink').on('click', function(e) {
        e.preventDefault();
        $('#overlay, #hamNavCont').fadeToggle(250);
        $(this).toggle();
    });

    $('#hamNav > li > a').not('.dismiss a, .noChildren a').on('click', function(e) {
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

    if ($('#navbar').length === 0) {
        var $hamNavHome = $(
                '<li class="noChildren">' +
                    '<a href="http://www.seattle.gov/util/abtest/home/r/">Home</a>' +
                '</li>'
            );

        $hamNavHome.insertAfter($('#hamNav > li:first-child'));
    }

    //XS Nav Accordion ------------------------------/
    $('#nav-xs ul > li > a').on('click', function(e) {
        if ($(this).siblings('ul').length > 0) {
            e.preventDefault();
            $(this).siblings('ul').slideToggle();
        }
    }); 

    //Google Translate ------------------------------/
    $('#showTranslate').on('click', function(e) {
        e.preventDefault();

        if ($('.goog-te-gadget').length > 0) {
            $('.goog-te-gadget').show();
        } else { 
            loadGTranslate();
        }
        $(this).hide();
    });

    if (document.cookie.indexOf('googtrans=') >= 0 && document.cookie.indexOf('googtrans=/en/en') < 0) {
        loadGTranslate();
        $('#showTranslate').hide();
    }
});

var gtInit = function() {
    new google.translate.TranslateElement({ pageLanguage: 'en', 
        layout: google.translate.TranslateElement.InlineLayout.VERTICAL, 
        autoDisplay: false}, 'gTranslate');

    $nearbyLinks = $('div.footerCat:last-child a');

    $('.goog-te-combo')
          .on('change', function() {
            $(this).blur();
            if ($(this).val() == 'en' || $(this).val() == '') {
                $('#showTranslate').show();
                $('.goog-te-gadget').hide();
            }
        }).on('focus', function() {
            $nearbyLinks.css('pointer-events','none');
        }).on('focusout', function() {
            $nearbyLinks.css('pointer-events','');
        });
}

var loadGTranslate = function() {
    var gt = document.createElement('script');
        gt.type = 'text/javascript';
        gt.async = true;
        gt.src = 'http://translate.google.com/translate_a/element.js?cb=gtInit';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild(gt);
}