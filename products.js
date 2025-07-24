const products = [
    {id:1, name: 'lenevo', price:65000},
    {id:2, name: 'Dell', price:70000},
    {id:3, name: 'HP', price:80000},
    {id:4, name: 'apple', price:1000000},
]

const names = products.map(products =>products.name)
//console.log(names) 


products.forEach(p => console.log(p.id) )

const expensive  = products.filter(p =>p.price>70000);
console.log(expensive)