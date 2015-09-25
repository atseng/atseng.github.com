$(document).ready(function(){
   $('.curtains').curtain();
   $('.curtains>li').css('position', 'fixed');

   $(function () {
    $('.curtains').curtain({
        scrollSpeed: 400,
        curtainLinks: '.curtain-links'
    });
});

    var scrollorama = $.scrollorama({
        blocks:'.curtains'
    });

    scrollorama.animate('.sf-header',{
        delay: 1760, duration: 800, property:'top', start:-400, end:455
    });

    scrollorama.animate('.installation',{
        delay: 1760, duration: 800, property:'top', start:-350, end:460
    });


    var batsignal = window.matchMedia('all and (max-width: 700px)');

    if (batsignal.matches) {
        $('.curtains').css('display', 'none');
        $('nav').css('display', 'none');
        $('footer').css('display', 'none');
        $('.batmobile').css('display', 'block');
    }

});



