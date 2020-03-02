// Creare un dropdown menu con jquery

$(document).ready(function(){

    $('.menu-item').click(function(){
        if ($(this).find('.dropdown-menu').is(':hidden')) {
            $('.menu-item').find('.dropdown-menu').slideUp();
            $(this).find('.dropdown-menu').slideToggle();
        } else {
            $(this).find('.dropdown-menu').slideToggle();
        }
    });
});
