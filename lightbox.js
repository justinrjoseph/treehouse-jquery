// problem: user when clicking on image goes to a dead end
// solution: create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//  an image
$overlay.append($image);

//  a caption
$overlay.append($caption);

// add overlay
$('body').append($overlay);

// capture the click event on a link to an image
$('#image_gallery li a').click(function(e) {
  e.preventDefault();
  var image_location = $(this).attr('href');
//  upate overlay with the image linked in the link
  $image.attr('src', image_location);
//  show the overlay 
  $overlay.show('slow');
  //  get child's alt attribute and set caption
  var caption_txt = $(this).children("img").attr('alt');
  $caption.text(caption_txt);
});

// when overlay is clicked
$overlay.click(function() {
//  hide the overlay
   $overlay.hide();
});