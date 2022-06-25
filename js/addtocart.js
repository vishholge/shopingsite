const cartItemsLength = document.getElementById('cart-items-length')
const cartItems = []

const addToCart = (id) => {
	cartItems.push(id)
	cartItemsLength.innerText = cartItems.length
	let cartItem = globalProducts.find(product => product.id == id)
	createItemsInCart(cartItem);
}
