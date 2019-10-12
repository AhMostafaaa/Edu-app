// Create Smooth scroll
$(document).ready(function(){
  
  $("a").on('click', function(e) {

    if (this.hash !== "") {
    
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
    window.location.hash = hash;
      });
    }
  });
});


// scroll to top
var mybutton = document.getElementById("btnTop");

window.onscroll = function() { 
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
   } else {
  mybutton.style.display = "none";
}};

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



