// prevent spoilerphobes from seeing spoilers
// Solution: hide spoilers and reveal them through user interaction

// 1. hide spoiler
$('.spoiler span').hide();
// 2. add button
$('.spoiler').append("<button>Reveal Spoiler!</button>");
// 3. when button pressed
$('button').click(function() {
  //    3.1 show spoiler
  $(this).prev().show();
  //    3.2 get rid of button
  $(this).remove();
});