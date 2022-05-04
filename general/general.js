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

let basketBtn = document.getElementById('basketBtn');

let basketOver = document.querySelector(".basket__overlay");

basketBtn.onclick = () => {
  //производим какие-то действия

  basketBtn.addEventListener("click", function (event) {
    event.preventDefault();
    basketOver.classList.remove("close");
  });


  basketOver.addEventListener("click", function (event) {
    event.preventDefault();
    basketOver.classList.add("close");
  });

}

let cardProducts = JSON.parse(localStorage.getItem('cardProducts')) || [];

function cardItem(title, price) {
  this.title = title;
  this.price = price;
};

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
      p.className = 'nameGoods';
      p.id = 'nameGoods';
      div.appendChild(p);


      goods.append(div);



    })
  })
  .then(() => {
    //получаем идентификатор элемента
    let but = [...document.getElementsByClassName('fastButton')];
    let popup = [...document.getElementsByClassName("img__overlay")];

    popup.forEach((item) => {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        item.classList.add("hidden");
      });
    })

    but.forEach((item) => {
      //вешаем на него событие
      item.onclick = () => {
        //производим какие-то действия

        //   let btn = document.querySelector(".fastButton");

        item.addEventListener("click", function (event) {
          event.preventDefault();
          item.nextElementSibling.classList.remove("hidden");
        });
      }
    })

  })
  // item.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.lastChild.innerText
  .then(() => {
    let butcard = [...document.getElementsByClassName("basket")];
    butcard.forEach((item) => {
      item.onclick = () => {
        cardProducts.push(new cardItem(item.parentElement.parentElement.lastElementChild.innerText, item.parentElement.nextElementSibling.firstElementChild.innerText));
        localStorage.setItem('cardProducts', JSON.stringify(cardProducts))
        document.getElementById('cardproducts').innerHTML = '';
        cardProducts.forEach(item => {
          document.getElementById('cardproducts').innerHTML += `
            <div class = "prodct-in-card"><div>${item.title}</div><div>${item.price}</div></div>
          `
        })
      }
    })
    document.getElementById('cardproducts').innerHTML = '';
    cardProducts.forEach(item => {
      document.getElementById('cardproducts').innerHTML += `
        <div class = "prodct-in-card">${item.title}${item.price}</div>
      `
    })
    document.getElementById("deleteCard").onclick = () => {
      document.getElementById('cardproducts').innerHTML = '';
      cardProducts = [];
      localStorage.setItem('cardProducts', JSON.stringify(cardProducts));
    }
  })









// formSearch

const search = document.querySelector('#searchForm');

search.addEventListener('input', (ev) => {
  const value = ev.target.value.trim();
  const searchItems = document.querySelectorAll('.container');
  const searchRegExp = new RegExp(value, 'gi');

  if (value === '') {
    searchItems.forEach((el) => {
      el.classList.remove('hide');
    })
    return;
  }

  searchItems.forEach((el) => {
    const innerCard = el.querySelector('.nameGoods');
    const elementText = innerCard.textContent;
    const isContainsSearchRequest = searchRegExp.test(elementText);
    if (!isContainsSearchRequest) {
      el.classList.add('hide');
    } else {
      el.classList.remove('hide');
    }
  })
})


