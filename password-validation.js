// problem: hints are shown even when form is valid
// solution: hide and show the hints at appropriate times

var $password = $('#password');
var $confirm = $('#confirm_password');

// hide hints
$('form span').hide();

function isPasswordValid() {
   return $password.val().length > 8;
}

function doPasswordsMatch() {
   return $password.val() === $confirm.val();
}

function canSubmit() {
   return isPasswordValid() && doPasswordsMatch();
}

function passwordEvent() {
//     learn if password is valid
  if (isPasswordValid()) {
//      hide hint if valid
      $(this).next().hide();
  } else {
//      else show hint
      $(this).next().show();
  }  
}

function confirmPasswordEvent() {
//    learn if password and confirmation match
    if (doPasswordsMatch()) {
//        hide hint if matched
      $confirm.next().hide();
    } else {
//        else show hint
      $confirm.next().show();
    }
}

function enableSubmit() {
  $('input[type="submit"]').prop('disabled', !canSubmit()); 
}

// when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmit);

// when event happens on confirmation
$confirm.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmit);

enableSubmit();