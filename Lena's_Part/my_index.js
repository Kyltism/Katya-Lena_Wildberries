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




