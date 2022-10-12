//Script para ir hacia cierta seccion
$('.menu-nav_link').on('click',function(e){
    e.preventDefault();
    var sectionID = '#'+ $(this).data('section');
    // prompt(sectionID)
    $('#content section:visible').fadeOut();
    $(sectionID).fadeIn();
});

