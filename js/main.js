// Creare un dropdown menu con jquery

$(document).ready(function(){

    $('.menu-item').click(function(){
        if ($(this).find('.dropdown-menu').is(':hidden')) {
            $(this).find('.dropdown-menu').slideToggle();
        } else {
            $(this).find('.dropdown-menu').slideToggle();
        }
    });
});
