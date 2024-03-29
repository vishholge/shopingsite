const productsParentDiv = document.getElementById('products')

// {
// 	category: "men's clothing"
// 	description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// 	id: 1
// 	image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// 	price: 109.95
// 	rating: {rate: 3.9, count: 120}
// 	title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// }

const createProductDiv = (product) => {
	const colDiv = document.createElement('div')
	const productDiv = document.createElement('div')
	const productImg = document.createElement('img')
	const productBody = document.createElement('div')
	const productHeader = document.createElement('div')
	const productTitle = document.createElement('h6')
	const productPrice = document.createElement('h5')
	const productDescription = document.createElement('p')
	const ratingStar1 = document.createElement('span')
	const ratingStar2 = document.createElement('span')
	const ratingStar3 = document.createElement('span')
	const ratingStar4 = document.createElement('span')
	const ratingStar5 = document.createElement('span')
	const ratingCount = document.createElement('span')
	const cardButtonOuter = document.createElement('div')
	const addToCartButton = document.createElement('a')
	const buyButton = document.createElement('a')

	colDiv.classList = 'col-lg-3 col-md-4 col-sm-6 '
	productDiv.classList = 'card product'
	productImg.classList = 'card-img-top'
	productBody.classList = 'card-body'
	productHeader.classList = 'product-header'
	productTitle.classList = 'card-title'
	productPrice.classList = 'card-title product-price'
	productDescription.classList = 'card-text'
	ratingStar1.classList = 'fa fa-star checked'
	ratingStar2.classList = 'fa fa-star checked'
	ratingStar3.classList = 'fa fa-star checked'
	ratingStar4.classList = 'fa fa-star checked'
	ratingStar5.classList = 'fa fa-star checked'
	ratingCount.classList = 'rating-count'
	cardButtonOuter.classList = 'btn-outer'
	addToCartButton.classList = 'btn  add-to-cart-btn'
	buyButton.classList = 'btn  buy-btn'

	colDiv.id = `product-${product.id}`

	productTitle.innerText = `${product.title.slice(0, 20)}...`
	productPrice.innerText = `$${product.price}`
	productDescription.innerText = `${product.description.slice(0, 50)}...`
	ratingCount.innerText = `(${product.rating.count})`
	addToCartButton.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>'
	buyButton.innerText = 'Buy now'

	productImg.src = product.image
	productImg.alt = 'product-img'

	colDiv.appendChild(productDiv)
	productDiv.appendChild(productImg)
	productDiv.appendChild(productBody)
	productBody.appendChild(productHeader)
	productHeader.appendChild(productTitle)
	productHeader.appendChild(productPrice)
	productBody.appendChild(productDescription)
	

	const ratingStars = Math.ceil(product.rating.rate)
	ratingStars >= 1 && productBody.appendChild(ratingStar1)
	ratingStars >= 2 && productBody.appendChild(ratingStar2)
	ratingStars >= 3 && productBody.appendChild(ratingStar3)
	ratingStars >= 4 && productBody.appendChild(ratingStar4)
	ratingStars >= 5 && productBody.appendChild(ratingStar5)
	productBody.appendChild(ratingCount)
	productBody.appendChild(cardButtonOuter)
	cardButtonOuter.appendChild(addToCartButton)
	cardButtonOuter.appendChild(buyButton)

	productsParentDiv.appendChild(colDiv)

	addToCartButton.addEventListener('click', function () {
		addToCart(product.id);
		this.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
		this.classList.add('disabled');
	})
}