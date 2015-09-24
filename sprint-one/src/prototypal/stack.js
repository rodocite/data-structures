var Stack = function() {
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.count = 0;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count++] = value;
};

stackMethods.pop = function() {
  if(this.size() === 0) {
    return 'The stack is empty.'
  }
  
  // Decrements before the return because count needs to refer
  // to the property that currently has a value
  // Push increments count after execution so
  // the count after push represents a key that is not yet taken
  return this.storage[--this.count];
};

stackMethods.size = function() {
  return this.count;
};
