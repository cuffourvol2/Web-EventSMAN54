//Background
            var text = document.getElementById('text')
            scroll = window.pageYOffset;
            document.addEventListener('scroll', function (e){
            var offset = window.pageYOffset;
            scroll = offset;
            text.style.top = - scroll/10 + '%';
            })



//Go Top
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}