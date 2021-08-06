var slideIndex = 1;
showSlides(slideIndex, "Class");
showSlides(slideIndex, "Race")

// Next/previous controls
function plusSlide(n, slideType) {
  showSlides(slideIndex += n, slideType);
}

// Thumbnail image controls
function currentSlide(n, slideType) {
  showSlides(slideIndex = n, slideType);
}

function showSlides(n, slideType) {
  var i;
  console.log("slide" + slideType);
  var slides = document.getElementsByClassName("slide" + slideType);
  var dots = document.getElementsByClassName("dot" + slideType);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




function halfLevel(level) {
  console.log(level);
  document.getElementsByClassName("half").value = Math.floor(level/2);
}

