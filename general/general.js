// Slides
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



      const priceGoods = document.createElement('div');
      priceGoods.className = 'priceGoods';

      const overlay = document.createElement('div');
      overlay.id = 'overlay';
      fastView.appendChild(overlay);

      fastButton = document.createElement('button');
      fastButton.className = 'fastButton';
      fastButton.innerHTML = 'Быстрый просмотр';
      fastButton.id = 'fastButton';
      overlay.appendChild(fastButton);

      const img__overlay = document.createElement('div');
      img__overlay.className = 'img__overlay hidden';
      overlay.appendChild(img__overlay);

      const fastImg = document.createElement('img');
      fastImg.className = 'fastimg';
      fastImg.src = item.src;
      img__overlay.appendChild(fastImg);




      const img = document.createElement('img');
      img.className = 'cardImg';
      img.setAttribute("id", "cardImg");
      img.className = 'cardImg'
      img.src = item.src;
      // img.id = item.id;
      fastView.appendChild(img);



      const basket = document.createElement('button');
      basket.className = 'basket';
      basket.innerHTML = '<img src = "./img/basket.jpg" class = "basketImg">'

      basket.setAttribute('data-id', item.id);


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
    let but = [...document.getElementsByClassName('fastButton')];

    but.forEach((item) => {
      //вешаем на него событие
      item.onclick = () => {
        //производим какие-то действия

        let img = document.querySelector('.fastimg');
        let popup = document.querySelector(".img__overlay");
        let btn = document.querySelector(".fastButton");

        btn.addEventListener("click", function (event) {
          event.preventDefault();
          popup.classList.remove("hidden");

        });

        img.addEventListener("click", function (event) {
          event.preventDefault();
          popup.classList.add("hidden");
        });

      }

    })


  });




let basketBtn = document.getElementById('basketBtn');

basketBtn.onclick = () => {
  //производим какие-то действия

  let basketOver = document.querySelector(".basket__overlay");
 
  

  basketBtn.addEventListener("click", function (event) {
    event.preventDefault();
    basketOver.classList.remove("close");
  });

 
  basketOver.addEventListener("click", function (event) {
    event.preventDefault();
    basketOver.classList.add("close");
  });



}

