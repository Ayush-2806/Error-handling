function filterByCategory(products, category) {
    return products.filter(product => product.category === category);
  }


var products = [
    {name : "shirt" , category : "clothing"},
    {name : "pant" , category : "clothing"},
    {name : "Hat" , category : "Accessories"},
    {name : "Sunglasses" , category : "Accessories"}
]
 
console.log(filterByCategory(products, "clothing"));

