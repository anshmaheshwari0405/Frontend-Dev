function Product(name,price){
this.name=name;
this.price=price;
}
Product.prototype.applyDiscount=function(percent){
return this.price-(this.price*percent/100);
};

const p1=new Product("Laptop :",80000);
const p2=new Product("Phone :",25000);
const p3=new Product("Watch :",5500);

console.log(p1.name,p1.applyDiscount(10));
console.log(p2.name,p2.applyDiscount(20));
console.log(p3.name,p3.applyDiscount(50));
