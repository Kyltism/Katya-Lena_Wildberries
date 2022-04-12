// let header = document.createElement('header');
// document.body.append(header);

// let headerWrapper = document.createElement('div');
// headerWrapper.className = 'header__wrapper';
// header.append(headerWrapper);

// let headerLink = document.createElement('div');
// headerLink.className = 'header__link';
// headerLink.setAttribute('id', 'link');
// headerWrapper.append(headerLink);

// for ( let i = 0; i < 20; i++) {
//     headerLink.append(document.getElementById('link').innerHTML = '<a href = "#" >By </a>'); 
// } через функцию колбэк 



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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