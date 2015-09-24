var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // Check if item in list
  //   If in list
  //     Access item and return
  //   Add item to list

  if(item in this._storage) {
    return this._storage[item];
  }

  this._storage[item] = item;
};

setPrototype.contains = function(item){
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
