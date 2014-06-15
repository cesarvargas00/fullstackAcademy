function LinkedList(){
  this.head = undefined;
  this.tail = undefined;
}

function Node(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

LinkedList.prototype.addToTail = function(element) {
  debugger;
  var nodeToAdd = new Node(element);
  if (typeof this.tail === "undefined"){
    this.head = nodeToAdd;
    this.tail = nodeToAdd;
  } else {
    this.tail.next = nodeToAdd;
    nodeToAdd.previous = this.tail;
    this.tail = nodeToAdd;
  }

};

LinkedList.prototype.removeHead = function(element) {
  if (typeof this.head === "undefined"){return;}
  var currentHead = this.head;
  if (this.head.next !== null){
    this.head = this.head.next;
    this.head.previous = null;
  }
  else{
    this.head = undefined;
    this.tail = undefined;
  }
  return currentHead.value;
};

LinkedList.prototype.addToHead = function(element) {

};
LinkedList.prototype.search = function(element) {};