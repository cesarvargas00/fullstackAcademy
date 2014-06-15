
// var Stack = function(){
//   this.head = 0;
//   this.arr = [];
// };

// Stack.prototype.push = function(element) {
//   this.arr[this.head] = element;
//   this.head++;
// };

// Stack.prototype.pop = function(element) {
//   if(this.head === 0) return undefined;
//   var retElement = this.arr[this.head - 1];
//   delete this.arr[this.head -1];
//   this.head--;
//   return retElement;
// };

// Stack.prototype.size = function(element) {
//   return this.head;
// };

// Stack.prototype.auditStorage = function(){
//   var count = 0;
//   for(var i = 0 ; i < this.head; i++)
//     count++;
//   return count;
// };

function Stack() {
  this.data = {};
  this.stackPointer = 0;
}

Stack.prototype.push = function(element) {
  this.data[this.stackPointer] = element;
  this.stackPointer++;
};

Stack.prototype.pop = function() {
  if(stackPointer = 0) return 0;
  var popElement = this.data[this.stackPointer-1];
  delete this.data[this.stackPointer-1];
  this.stackPointer--;
  return popElement;
};

Stack.prototype.size = function() {
  return this.stackPointer;
};

Stack.prototype.auditStorage = function() {

  //this is wrong... gotta traverse that.
  var count = 0;
  for(var i = 0; i < this.stackPointer;i++){
    count++;
  }
  return count;
};

