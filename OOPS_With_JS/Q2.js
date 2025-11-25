const menu={
"pizza":200,
"burger":120,
"pasta":150,
"momos":80,
"colddrink":50,
"cake":100
};

function calculateBill(orderItems){
try{
const prices=orderItems.map(item=>{
if(!menu[item])throw new Error(item+" is not available");
return menu[item];
});
const total=prices.reduce((a,b)=>a+b,0);
return "Total Bill: "+total;
}
catch(e){
return "Error: "+e.message;
}
}

console.log(calculateBill(["pizza","cake","colddrink"]));
console.log(calculateBill(["momos","burger","cake"]));
console.log(calculateBill(["pizza","icecream"]));
