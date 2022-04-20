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

let fastButton = '';

let goodsCard = [];
fetch('https://624dcdf853326d0cfe52fb09.mockapi.io/cards/cards')
    .then((Response) => {
        return Response.json()
    })

    .then((goodsCard) => {

        goodsCard.forEach(item => {
            const div = document.createElement('div');
            div.className = 'container';

            const fastView = document.createElement('div');
            fastView.className = 'button';
            div.appendChild(fastView);

            fastButton = document.createElement('button');
            fastButton.className = 'fastButton';
            fastButton.innerHTML = 'Быстрый просмотр';
            fastButton.id = 'fastButton';
            fastView.appendChild(fastButton);

            const priceGoods = document.createElement('div');
            priceGoods.className = 'priceGoods';

            const img = document.createElement('img');
            img.className = 'cardImg';
            img.setAttribute("id", "cardImg");
            img.className = 'cardImg'
            img.src = item.src;
            img.id = item.id;
            fastView.appendChild(img);

            const basket = document.createElement('button');
            basket.className = 'basket';
            basket.innerHTML = '<img src = "./img/basket.jpg" class = "basketImg">'
            fastView.appendChild(basket);

            const price = document.createElement('p');
            price.innerHTML = item.price;
            price.className = 'pricing';
            priceGoods.appendChild(price)

            const oldPrice = document.createElement('p');
            oldPrice.innerHTML = item.OldPrice;
            oldPrice.className = 'oldPrice';
            priceGoods.appendChild(oldPrice);

            div.appendChild(priceGoods)


            const p = document.createElement('p');
            p.innerHTML = item.name;
            p.className = 'nameGoods'
            div.appendChild(p);


            goods.append(div);

        })
    })
    .then(() => {
        //получаем идентификатор элемента
        let but = [ ...document.getElementsByClassName('fastButton')];
       
        but.forEach((item) => {
            
            let img = item.nextSibling;
            
            //вешаем на него событие
            item.onclick = () => {
                //производим какие-то действия
                if (img.style.width == '240px' && img.style.height == '300px');
                else {
                    img.style.width = '500px';
                    img.style.height = '560px';
                }

            }
        })


    });


