		$('a[href^="#apartments"],a[href^="#visit"],a[href^="#contact"]').on('click', function(event) {
		
			var target = $( $(this).attr('href') );
		
			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
			}
		
		});




$( ".item" ).first().addClass( "active" );

$(document).ready(function() {
        $('.foto-zoom').magnificPopup({ 
          type: 'image',
          zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
              return element.find('img');
            }
          }
            // other options
        });
});




$(document).ready(function() {
    $('.gallery').magnificPopup({
      delegate: 'dl dt a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }

    });
});



  $(document).ready(function() {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  });




//Youtube FULL width reponsive
$(document).ready(function() {
$(".wp-caption").removeAttr("style");
});

// Find all iframes
var $iframes = $( "iframe" );
 
// Find & save the aspect ratio for all iframes
$iframes.each(function () {
$( this ).data( "ratio", this.height / this.width )
// Remove the hardcoded width & height attributes
.removeAttr( "width" )
.removeAttr( "height" );
});
 
// Resize the iframes when the window is resized
$( window ).resize( function () {
$iframes.each( function() {
// Get the parent container's width
var width = $( this ).parent().width();
$( this ).width( width )
.height( width * $( this ).data( "ratio" ) );
});
// Resize to fix all iframes on page load.
}).resize();    
    
  




/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.equal');
});


$(window).resize(function(){
  equalheight('.equal');
});





