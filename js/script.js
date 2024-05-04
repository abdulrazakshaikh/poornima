
// --------------------------------TOOLTIP INIT--------------------------------
window.addEventListener('load', function(){
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"], [data-bs-tooltip="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))    
})


// -------------------------------HEADER STICKY--------------------------------
var activeSticky = document.getElementById("navbarHeader");
var winDow = window;

winDow.addEventListener("scroll", function () {
  var scroll = winDow.scrollY;
  var isSticky = activeSticky;

  if (scroll < 50) {
    isSticky.classList.remove("fixed-header");
  } else {
    isSticky.classList.add("fixed-header");
  }
});



// -------------------------------FANCYBOX--------------------------------
var galleryImages = document.querySelectorAll('body');
  imagesLoaded(galleryImages, function() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs : {
      type: "classic"
    },
    clickContent : false,
    Toolbar: {
      display: {
        left: [],
        middle: ["infobar"],
        right: ["slideshow", "thumbs", "close"],
      },
    },
  });
});



// ------------------------------ISOTOPE MASONRY-------------------------------
$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
});  
$('.grid').imagesLoaded().progress( function() {
  $('.grid').isotope('layout');
});