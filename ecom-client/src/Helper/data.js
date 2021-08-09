
let product = {}
let productId = []

fetch("/admin/view/")
.then(res => res.json())
.then((data) => {
        product = data.products
        productId = Object.keys(data.products)
})



export {product,productId}
