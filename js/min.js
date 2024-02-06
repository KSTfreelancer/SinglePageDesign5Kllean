
// menu
var hidthSection = document.querySelector(".nav ul");
var icons = document.querySelector(".toggle-icn");
console.log(hidthSection)
icons.addEventListener('click',function(){
    if( hidthSection.style.display == 'none'){
        hidthSection.style.display = "block";
    }else{
        hidthSection.style.display = "none";
    }
    
})
// counter
jQuery(document).ready(function($){
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });
  })

  

$('.wol-header').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.our-service-right').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('.team-sliders').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    nav:true,
    dots:false,
    nav:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.testmonial').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    nav:true,
    dots:false,
    nav:false,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})











