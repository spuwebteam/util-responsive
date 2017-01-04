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

    //Google Translate ------------------------------/
    $('#showTranslate').on('click', function(e) {
        e.preventDefault();
        loadGTranslate();
        this.remove();
    });

    if (document.cookie.indexOf('googtrans=') >= 0) {
        loadGTranslate();
        $('#showTranslate').remove();
    }
});

function gtInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', 
        layout: google.translate.TranslateElement.InlineLayout.VERTICAL, 
        autoDisplay: false}, 'gTranslate');
}

function loadGTranslate() {
    var gt = document.createElement('script');
        gt.type = 'text/javascript';
        gt.async = true;
        gt.src = 'http://translate.google.com/translate_a/element.js?cb=gtInit';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild(gt);
}

