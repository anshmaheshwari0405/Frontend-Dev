class BankAccount{
#balance=0;
deposit(a){this.#balance+=a;}
withdraw(a){
if(a>this.#balance)throw new Error("Insufficient balance");
this.#balance-=a;
}
getBalance(){return this.#balance;}
}

const acc=new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance());

try{acc.withdraw(2000);}
catch(e){console.log("Error:",e.message);}

acc.withdraw(200);
console.log(acc.getBalance());
