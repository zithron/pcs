$(window).scroll(function() {
    
    var wScroll = $(this).scrollTop();
    
    if(wScroll > $('#speakers').offset().top) {
        $('#navbar').addClass('navbar-fixed');
    } else {
        $('#navbar').removeClass('navbar-fixed');
    }
    
})