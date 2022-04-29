//Export

function customer(name,age){
    this.name = name;
    this.age = age;
}

function getname(cust) {
    return "customer name is {cust.name}" ;
}

function getage(cust){
    return "customer age is {cust.age}old";
}

export default customer;
export{getname,getage};