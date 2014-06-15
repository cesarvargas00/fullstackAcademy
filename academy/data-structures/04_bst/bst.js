var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(element) {
  if (this.value >= element){
    if(this.left === null){
      this.left = new BinarySearchTree(element);
    } else {
      this.left.insert(element);
    }
  } else {
    if (this.right === null){
      this.right = new BinarySearchTree(element);
    } else {
      this.right.insert(element);
    }
  }
};

BinarySearchTree.prototype.contains = function(element) {
  var result = false;
  if (this.value === element) return true;
    else
    {
      if (this.left) result = result || this.left.contains(element);
      if (this.right) result = result || this.right.contains(element);
    }
    return result;
};

BinarySearchTree.prototype.size = function() {
  return this.sizeMinusOne() + 1;
};

BinarySearchTree.prototype.sizeMinusOne = function() {
  var sizeMinusOne = 0;
  if(this.left !== null) sizeMinusOne += this.left.sizeMinusOne() + 1;
  if(this.right !== null) sizeMinusOne += this.right.sizeMinusOne() + 1;
  return sizeMinusOne;
};

BinarySearchTree.prototype.depthFirstMap = function() {
  // body...
};