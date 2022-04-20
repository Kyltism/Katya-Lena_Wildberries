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





//         // корзина
// function () {
//           // VARS
//           const productsContainer = document.querySelector("#grid");
//           const cartContainer = document.querySelector("#shopping-cart");
//           const cartContent = document.querySelector("#cart-content");
//           const toggleCartBtn = document.querySelector("#toggle-cart-btn");
//           const clearCartBtn = document.querySelector("#clear-cart");
//           const checkoutBtn = document.querySelector("#checkout-btn");
//           const totalPriceContainer = document.querySelector("#total-price");

//           // FUNCTIONS

//           function toggleCart() {
//             // переключить видимость корзины
//             cartContainer.classList.toggle("open");
//           }

//           function getLSContent() {
//             // получить содержимое из локального хранилища.
//             // если ничего нет, создайте пустой массив
//             const lsContent = JSON.parse(localStorage.getItem("products")) || [];
//             return lsContent;
//           }

//           function setLSContent(lsContent) {
//             // сохранять контент в локальном хранилище
//             localStorage.setItem("products", JSON.stringify(lsContent));
//           }

//           function calculateTotal(prices) {
//             // рассчитать общую стоимость в корзине
//             return prices.reduce(function (prev, next) {
//               return prev + next;
//             }, 0);
//           }

//           function getCartItemPrices() {
//             // extract the price numbers from the cart items to calculate total(извлеките ценовые числа из элементов корзины, чтобы рассчитать общую сумму)
//             const prices = [];
//             // retrieve the td element in the cart where the product price is stored(получаем элемент td в корзине, где хранится цена товара)
//             // for each product in the cart(для каждого товара в корзине)
//             let nums = cartContent.querySelectorAll("tr td:nth-child(3)");

//             // перебираем каждый узел td и извлекаем цену
//             //убираем из текста знак $, превращаем строку в
//             //число и вставляем число в массив цен
//             if (nums.length > 0) {
//               for (let cell = 0; cell < nums.length; cell++) {
//                 let num = nums[cell].innerText;
//                 num = num.replace(/[^\d]/g, "");
//                 num = parseFloat(num);
//                 prices.push(num);
//               }
//               // вернуть массив цен
//               return prices;
//             } else {
//               return;
//             }
//           }

//           function displayCartTotal() {
//             // отображать общую стоимость в корзине
//             const prices = getCartItemPrices();
//             let total = 0;
//             if (prices) {
//               total = calculateTotal(prices);
//               totalPriceContainer.innerHTML = `<span class="total">Total: $${total.toFixed(
//                 2
//               )}</span>`;
//             } else {
//               totalPriceContainer.innerHTML = '<span class="total">Total: $0</span>';
//             }
//           }

//           function displayProducts() {
//             // display all products in the cart

//             // get contents from local storage
//             const lsContent = getLSContent();
//             let productMarkup = "";
//             // if local storage is not empty, build the
//             //разметка товаров в корзине и соответствующие детали
//             if (lsContent !== null) {
//               for (let product of lsContent) {
//                 productMarkup += `
//                 <tr>
//                 <td><img class="cart-image" src="${product.image}" alt="${product.name
//                   }" width="120"></td>
//                 <td>
//                   ${product.name}
//                 </td>
//                 <td>${product.price}</td>
//                 <td><a href="#" data-id="${product.id}" class="remove">X</a></td>
//                 </tr>
//               `;
//               }
//             } else {
//               // если в локальном хранилище нет содержимого, предупредить пользователя
//               productMarkup = "Your cart is empty.";
//             }
//             // добавить разметку в DOM
//             cartContent.querySelector("tbody").innerHTML = productMarkup;
//           }

//           function saveProduct(clickedBtn) {
//             // сохранить выбранный товар в локальном хранилище и вместе отобразить его в корзине

//             // vars
//             const productId = clickedBtn.getAttribute("data-id");
//             const card = clickedBtn.parentElement.parentElement;
//             const cardInfo = clickedBtn.parentElement;
//             const prodImage = card.querySelector("img").src;
//             const prodName = cardInfo.querySelector("h4").textContent;
//             const prodPrice = cardInfo.querySelector(".card__price").textContent;

//             let isProductInCart = false;

//             // получить локальный массив хранения
//             const lsContent = getLSContent();


//             // чтобы пользователь не добавил один и тот же курс дважды, проверьте
//             // товар уже не находится в LS перед его добавлением
//             lsContent.forEach(function (product) {
//               if (product.id === productId) {
//                 alert("This course is already in your cart.");
//                 isProductInCart = true;
//               }
//             });

//             // только если товара еще нет в корзине,
//             // создаем объект, представляющий информацию о выбранном продукте
//             // и помещаем его в локальный массив хранения
//             if (!isProductInCart) {
//               lsContent.push({
//                 id: productId,
//                 image: prodImage,
//                 name: prodName,
//                 price: prodPrice
//               });

//               // добавить продукт в local storage
//               setLSContent(lsContent);
//               // update the display of courses in the shopping cart
//               displayProducts();
//             }
//           }

//           function removeProduct(productId) {
//             // удалить товар из корзины (и из local storage)

//             // получаем список товаров из LS
//             const lsContent = getLSContent();

//             // получаем индекс товара, который нужно удалить
//             // внутри массива содержимого local storage
//             let productIndex;
//             lsContent.forEach(function (product, i) {
//               if (product.id === productId) {
//                 productIndex = i;
//               }
//             });


//             // изменить элементы в локальном массиве хранения
//             // для удаления выбранного товара

//             lsContent.splice(productIndex, 1);
//             // обновляем содержимое local storage
//             setLSContent(lsContent);

//             displayProducts();
//           }

//           function clearCart() {
//             // очистить все товары из корзины (и локального хранилища)

//             // получаем список товаров из LS
//             const lsContent = getLSContent();
//             // пустой массив в local storage
//             lsContent.splice(0, lsContent.length);
//             //Обновить local storage
//             setLSContent(lsContent);
//             // снова отображаем содержимое корзины
//             displayProducts();
//           }

//           function checkout() {
//             // оформить заказ: просто очистить корзину
//             // после того, как пользователь подтвердит процесс оформления заказа
//             const cartProducts = cartContent.querySelector("tbody").innerHTML;
//             if (cartProducts !== "" && confirm("Are you sure you want to checkout?")) {
//               clearCart();
//             } else {
//               return;
//             }
//           }

//           // BIND EVENTS AND CALL FUNCTIONS

//           // Page load:
//           document.addEventListener("DOMContentLoaded", function (e) {
//             // отображаем список товаров в корзине, если есть, при загрузке страницы
//             displayProducts();
//             // отображаем сумму корзины
//             displayCartTotal();
//           });

//           // открыть и закрыть корзину
//           // при нажатии кнопки корзины
//           toggleCartBtn.addEventListener("click", function (e) {
//             e.preventDefault();
//             toggleCart();
//           });

//           // Сохранить товар в корзине и локальном хранилище
//           // при нажатии кнопки добавить в корзину
//           productsContainer.addEventListener("click", function (e) {
//             if (e.target.classList.contains("add-to-cart")) {
//               e.preventDefault();
//               const clickedBtn = e.target;
//               saveProduct(clickedBtn);
//             }
//           });

//           productsContainer.addEventListener("click", function (e) {
//             if (e.target.classList.contains("add-to-cart")) {
//               displayCartTotal();
//             }
//           });

//           // bind removeProduct to click event of the cartContent table(связываем removeProduct с событием клика таблицы cartContent)
//           cartContent.querySelector("tbody").addEventListener("click", function (e) {
//             e.preventDefault();
//             // идентифицируем кнопку, которая была нажата
//             const clickedBtn = e.target;
//             // если это кнопка удаления
//             if (e.target.classList.contains("remove")) {
//               // получаем значение свойства data-id, которое содержит
//               // id выбранного товара
//               const productId = clickedBtn.getAttribute("data-id");
//               // используем идентификатор для удаления выбранного товара
//               removeProduct(productId);
//               // снова отображаем товары в корзине,
//               // теперь список должен отображаться на 1 товар меньше
//               // или пусто, если в корзине не осталось товаров

//               // корректируем итог
//               displayCartTotal();
//             }
//           });

//           // привязываем кнопку очистки корзины как к функции, которая
//           // очищает корзину и переходит к функции, которая регулирует общую цену
//           clearCartBtn.addEventListener("click", function (e) {
//             e.preventDefault();
//             clearCart();
//           });
//           clearCartBtn.addEventListener("click", displayCartTotal);

//           // привязываем кнопку, которая осуществляет оплату, к функции, которая
//           // контролирует кассу и и к функции, которая регулирует общую цену
//           checkoutBtn.addEventListener("click", function (e) {
//             e.preventDefault();
//             checkout();
//           });
//           checkoutBtn.addEventListener("click", displayCartTotal);
//         });