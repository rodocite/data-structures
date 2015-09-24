var Tree = function(value){
  var newTree = {};

  // Extend treeMethods into Tree (functional-shared)
  _.extend(newTree, treeMethods);

  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var found = false;
  
  var recurse = function(node) {
    // If value is found, change found to true
    if(node.value === target) {
      found = true;

    // If not found and children are alive, recurse
    } else if (node.children.length !== 0 && !found) {
      _.each(node.children, function(child) {
        recurse(child);
      });
    }
  };

  // Initiate recursion at the head/root node
  recurse(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
