$(document).ready(function () {

    $('.header-link').click(function(){
         
        let target = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 100)
        return false;
    });
    $('.preloader-wrapper').delay(2000).fadeOut('slow')
});
