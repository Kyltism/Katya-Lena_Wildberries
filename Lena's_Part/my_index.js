let goods = document.getElementById('goods');

let pictureNames = document.getElementById('pictureNames');


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

            const fastButton = document.createElement('button');
            fastButton.className = 'fastButton';
            fastView.appendChild(fastButton);

            const priceGoods = document.createElement('div');
            priceGoods.className = 'priceGoods';

            const img = document.createElement('img');
            img.className = 'cardImg';
            img.src = item.src;
            img.id = item.id;
            fastView.appendChild(img);

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

 



