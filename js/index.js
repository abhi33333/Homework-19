
console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){

    // Show the form when the page loads
    $('.expandable').addClass('active');

    // Functionality for expanding and collapsing the form
    $('.expandable, .collapsible').on('click', function(){
      $('.form-content').slideToggle();
      $('.expandable').toggleClass('active');
      if($('.expandable').hasClass('active')) {
        $('.expandable').text('Click here to collapse the form');
      } else {
        $('.expandable').text('Click here to expand the form');
      }
    });
  });
