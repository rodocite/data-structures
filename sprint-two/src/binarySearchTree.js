var BinarySearchTree = function(value){
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  // Check if this.value is greater than value
  // If this.value is greater
  //     Check if this.left is null
  //     * Need to traverse until null value is found *
  //     If this.left is null, tree is at the end. Tree must grow.
  //       Instantiate a new BST on this.left
  //     Recurse

  if(this.value > value) {
    if(this.left === null) {
      this.left = new BinarySearchTree(value);
    }
    this.left.insert(value);
  }

  // Same thing as above, only opposite direction.
  if(this.value < value) {
    if(this.right === null) {
      this.right = new BinarySearchTree(value);        
    }
    this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(target) {
  var found = false;
  this.depthFirstLog(function(nodeValue) {
    if(target === nodeValue) {
      found = true;
    }
  });
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var recurse = function(node) {
    callback(node.value);

    if(node.left) {
      recurse(node.left);
    }
    
    if(node.right) {
      recurse(node.right);
    }
  };

  recurse(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



