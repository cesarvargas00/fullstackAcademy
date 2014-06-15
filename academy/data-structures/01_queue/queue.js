var Queue = function(){
  this.arr = [];
  this.tail = 0;
  this.head = 0;
  this.__size = 0
}

Queue.prototype.enqueue = function(element) {
  this.arr[this.tail] = element;
  this.tail++;
  this.__size++;
};

Queue.prototype.dequeue = function(element) {
  if(this.__size === 0) return undefined;
  var returnElement = this.arr[this.head];
  delete this.arr[this.head];
  this.head++;
  this.__size--;
  return returnElement;
};

Queue.prototype.size = function() {
  return this.__size;
};

Queue.prototype.countByTraversing = function() {
  var count = 0;
  for(var i = this.head;i < this.tail; i++){
    count++;
  }
  return count;
};