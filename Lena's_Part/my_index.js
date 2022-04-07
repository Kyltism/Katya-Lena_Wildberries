let products = document.createElement('section');
products.className = 'products';
document.body.append(products);

let hitsOfSales = document.createElement('div');
hitsOfSales.className = 'hitsOfSales';
products.append(hitsOfSales);

let sectionText = document.createElement('h2');
sectionText.className = 'sectionText';
sectionText.innerHTML = 'Хиты продаж'
hitsOfSales.append(sectionText);

let goods = document.createElement('div');
goods.className = 'goods';
hitsOfSales.append(goods);

for (var i = 0; i < 7; i++) {
    let goodsCard = document.createElement('div');
    goodsCard.className = 'goodsCard';
    goods.append(goodsCard);
    let cardImg = document.createElement('div');
    cardImg.className = 'cardImg';
    goodsCard.append(cardImg)
    
}



