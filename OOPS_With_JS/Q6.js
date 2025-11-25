const products=[
{id:1,name:"Laptop",category:"Electronics",price:50000,stock:30},
{id:2,name:"Phone",category:"Electronics",price:20000,stock:15},
{id:3,name:"Shoes",category:"Fashion",price:2000,stock:20},
{id:4,name:"Tshirt",category:"Fashion",price:800,stock:25}
];

function getLowStockProducts(){
return products.filter(p=>p.stock<20);
}

function sortProductsByPrice(){
return products.sort((a,b)=>a.price-b.price);
}

function calculateTotalInventoryValue(){
return products.reduce((t,p)=>t+(p.price*p.stock),0);
}

function groupByCategory(){
return products.reduce((g,p)=>{
(g[p.category]||(g[p.category]=[])).push(p);
return g;
},{});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
