var Stack = function() {
  var instance = {};
  _.extend(instance, stackMethods);

  instance.count = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count++] = value;
};

stackMethods.pop = function() {
  // First check if storage carries values (no point to pop on an empty storage).
    // Return an error if storage is empty
  // Return the storage at the CURRENT count (count that last received a value).

  if(this.size() === 0) {
    return 'Stack is currently empty. Please push a value before popping.';
  }

  // Count is decremented before the return because count needs to represent 
  // the most recent key that currently carries a value
  // Since push increments after the value has been pushed
  // count represents the next key to be pushed into.
  return this.storage[--this.count];
};

stackMethods.size = function() {
  return this.count;
};


