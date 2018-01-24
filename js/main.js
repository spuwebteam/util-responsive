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
        .append('<span class="fa fa-chevron-down pull-right"></span>');

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

    // Add Video Functionality 
    if($('a.video-modal').length > 0){
        // Video Modal
        var $videoModal = $('' +
            '<div class="modal fade" id="videoModal" tabindex="-1" role="dialog">' +
                '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                        '<div class="modal-header">' +
                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                '<span aria-hidden="true" class="fa fa-close"><span class="sr-only">Close</span></span>' +
                            '</button>' +
                        '</div>' +
                        '<div class="modal-body">' +
                            '<div class="modal-video">' +
                                '<div class="embed-responsive">' +
                                    '<iframe class="embed-responsive-item" src=""' +
                                        'webkitallowfullscreen mozallowfullscreen allowfullscreen title="video"></iframe>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '');

        // Add Video Modal to page                       
        $videoModal.appendTo($('body'));

        // Bind Video Modal Links
        $('.video-modal').on('click', function(e){
            e.preventDefault();

            // Set Aspect ratio
            var responsiveWrapper = 'embed-responsive-16by9';
            if ($(this).hasClass('size4x3')) { 
                responsiveWrapper = 'embed-responsive-4by3';
            }
            $('#videoModal iframe').parent().addClass(responsiveWrapper);

            // Set Source
            $('#videoModal iframe').attr('src', $(this).attr('href') );

            // Activate Modal
            $('#videoModal').modal();
        });
    }

    //Legacy Accordions
    $('.accHeader').each(function(){
        $(this).replaceWith($('<button class="accHeader">' + this.innerHTML + '</button>'));
    });
    $('.accHeader').click(function(){
        var $accBody = $(this).next('.accBody');
        
        if ($(this).hasClass('active')){
            $accBody.slideUp();
            $(this).removeClass('active');
        } else {
            $accBody.slideDown();
            $(this).addClass('active');
        }
    });

    //Hotfix Table styles
    $('table').addClass('table table-bordered');

    // ADA Fix for Non-distinguishable links
    // between residential & business links
    $('#primaryNav, #hamNav').each(function() {
        var businessSection = $(this).find('a[href*="ForBusinesses"]')[0];
        var $businessNav = $(businessSection).siblings('ul');

        $businessNav.find('a').each(function(){
            $(this).attr('title', $(this).text() + ' for Businesses');
        });
    });

    // Skip to Navigation
    $possibleContent = $('div.content, div.regularContent, #textHeroCall div.text');

    if ($possibleContent.length > 0) {
        var $mainContent = $($possibleContent[0]); 
        var $skipToMain = $('<a href="#mainContentWrapper" class="sr-only sr-only-focusable" id="skipToMain">Skip to main content</a>');
        $mainContent.attr('id', 'mainContentWrapper');
        $('body').prepend($skipToMain);
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
        gt.src = 'https://translate.google.com/translate_a/element.js?cb=gtInit';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild(gt);
}

var newwin = function(URL) {
    window.open(URL,'SlideRule','width=800,height=750').focus();
}

