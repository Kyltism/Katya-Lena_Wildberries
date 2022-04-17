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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 1000);
}

//автоматический слайдер
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }








let goods = document.getElementById('goods');

let pictureNames = document.getElementById('pictureNames');

function createDiv(className) {
    let imgSrc = document.createElement('div');
    imgSrc.className = className;
    imgSrc.id = 'img';
    return imgSrc;
}


for (var i = 0; i < 10; i++) {
    goods.append(createDiv('img'));
}
let imgOfGoods = document.getElementById('img')

let goodsCard = [];
fetch('https://624dcdf853326d0cfe52fb09.mockapi.io/cards/cards')
    .then((Response) => {
        return Response.json()
    })

    .then((goodsCard) => {

        goodsCard.forEach(item => {
            const img = document.createElement('img');
            img.className = 'cardImg';
            img.src = item.src;
            img.id = item.id;
            imgOfGoods.append(img);

            const span = document.createElement('span');
            span.innerHTML = item.name;
            imgOfGoods.append(span);
        })
    })
