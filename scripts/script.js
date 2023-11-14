let buyf = false;
let basket_price = 0;
let price = document.querySelector('.busket__price')
let product_price = document.querySelector('.shop_price').innerHTML
product_price = product_price.replace(' ', '')
product_price = parseInt(product_price)
const button = document.getElementById('btn')
function buy() {
	if(!buyf){
		button.style.background = 'lime';
		button.innerHTML = "В корзине";
		buyf = true;	
		basket_price = basket_price + product_price
	} else {
		button.style.background = 'Silver';
		button.innerHTML = "Купить";
		buyf = false;
		basket_price = basket_price - product_price
	}
	console.log(basket_price)
	price.innerHTML = basket_price + ' руб' 
}
