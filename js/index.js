const productsSpinner = document.getElementById('products-spinner')
let globalProducts = [];
const fetchProducts = async () => {
	const res = await fetch('https://fakestoreapi.com/products')
	console.log(res);
	const data = await res.json()
	globalProducts = data;

	productsSpinner.style.display = 'none'
	data.forEach(product => createProductDiv(product))
}