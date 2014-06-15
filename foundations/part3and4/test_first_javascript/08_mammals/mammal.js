var Mammal = function (name){
  this.name = name;
  this.offspring = [];
  //
};
Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + ", I'm a Mammal"
};

Mammal.prototype.haveBaby = function() {
  var son = new Mammal("Baby " + this.name);
  this.offspring.push(son);
  return son;
};

var Cat = function(name, color){
  Mammal.call(this,name); // Your "this" is going to be my "this". And use my name as your name ( remember that Mammal IS a function.)
  this.color = color;
  this.parent = Mammal;

};

  Cat.prototype = Object.create(Mammal.prototype);
  Cat.prototype.constructor = Cat; // looks at it's constructor, dont find it,  go look at the Mammals constructor, and now the cat is a mammal.


Cat.prototype.haveBaby = function(color) {
  var cat = Mammal.prototype.haveBaby.call(this);
  cat.color = color;
  return cat;
};