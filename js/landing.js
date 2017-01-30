$(function(){

    // Clone Secondary Nav for mobile
    $('#secondaryNav-xs ul').append(
        $('#primaryNav > ul > li > a.active')
        .siblings('ul')
        .children('li')
        .clone()
    );

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

});
