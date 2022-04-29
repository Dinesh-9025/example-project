//prototype
//Function scope
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

  }
  
  Person.prototype.name = function() {  
    return this.firstName + " " + this.lastName
  };

  //Block scope
  {
  const myFather = new Person("BOM", "DOM", 50);
  document.getElementById("gugu").innerHTML ="My father name is " + myFather.name();
  };