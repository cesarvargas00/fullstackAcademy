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

LinkedList.prototype.removeTail = function() {
  if(typeof this.tail === "undefined"){return;}
  var currentTail = this.tail;
  if(this.tail.previous !== null){
    this.tail = this.tail.previous;
    this.tail.next = null;
  } else {
    this.head = undefined;
    this.tail = undefined;
  }
  return currentTail.value;
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
  var nodeToAdd = new Node(element);
  if (typeof this.head === "undefined"){
    this.head = nodeToAdd;
    this.tail = nodeToAdd;
  } else {
    this.head.previous = nodeToAdd;
    nodeToAdd.next = this.tail;
    this.head = nodeToAdd;
  }
};
LinkedList.prototype.search = function(element) {
  var pntr = this.head;
  while(pntr !== null){
    if(pntr.value === element) return true;
    pntr = pntr.next;
  }
  return false;
};