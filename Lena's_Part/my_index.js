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
        console.log('but', but);
        let images = document.getElementsByClassName('cardImg');

        but.forEach((item) => {
            console.log("item", item);
            let img = item.nextSibling;
            console.log(img);
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


// function resizeImage(img) {

//     img.style.width = 500;
//     img.style.height = 500;
// }


window.onload = function () {

    //получаем идентификатор элемента
    // let images = document.getElementById('cardImg');
    // console.log('images', images);

    // //вешаем на него событие
    // images.onclick = function() {
    //     //производим какие-то действия
    //     if (this.style.width ='240px') this.style.height = '300px';
    //     else this.style.width = '500px', this.style.height = '560px';

    //       }
}





