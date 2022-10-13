//Script para ir hacia cierta seccion
$('.menu-nav_link').on('click',function(e){
    e.preventDefault();
    var sectionID = '#'+ $(this).data('section');
    $('#content section:visible').fadeOut();
    $(sectionID).fadeIn();
});


//menu-bttn responsive

const menBtn = document.querySelector('.menu-btn'); 
const btn = document.querySelector('.button-resp'); 
const nav = document.querySelector('.nav-section'); 
const menunav = document.querySelector('.menu-nav'); 
const items = document.querySelectorAll('.menu-nav_item'); 


let showmenu = false ; 

menBtn.addEventListener('click' , toggleMenu);

function toggleMenu(){
    if(!showmenu){
        btn.classList.add('open'); 
        nav.classList.add('open'); 
        menunav.classList.add('open'); 
        items.forEach(item => item.classList.add('open'));
         

        showmenu = true; 
    } else { 
        btn.classList.remove('open'); 
        nav.classList.remove('open'); 
        menunav.classList.remove('open'); 
        items.forEach(item => item.classList.remove('open')); 

        showmenu = false; 
    }
}