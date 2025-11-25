class MovieTicket{
constructor(movieName,seatNo,price){
this.movieName=movieName;
this.seatNo=seatNo;
this.price=price;
}
}
MovieTicket.prototype.printTicket=function(){
return this.movieName+" "+this.seatNo+" "+this.price;
};

class OnlineTicket extends MovieTicket{
constructor(movieName,seatNo,price,fee){
super(movieName,seatNo,price);
this.convenienceFee=fee;
}
getTotalAmount(){
return this.price+this.convenienceFee;
}
}

const t=new OnlineTicket("3 Idiots","A12",450,50);
console.log(t.printTicket());
console.log(t.getTotalAmount());
