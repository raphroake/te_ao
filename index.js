//$('.main-carousel').flickity({
//  // options
//  cellAlign: 'left',
//  contain: true
//});

$(document).ready(function(){
    
    $('.flickity-prev-next-button, .image').hover(function () {
   
    console.log('hello!')
        
        $('.image').css({'opacity' : '1'});
    
    
    
},function () {
    
        console.log('goodbye');

                $('.image').css({'opacity' : '0'});

    
})

  
    
})

