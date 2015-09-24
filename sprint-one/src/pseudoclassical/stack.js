var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count++] = value;
};

Stack.prototype.pop = function() {
  if(this.size() === 0) {
    return 'The stack is empty.';
  }
  return this.storage[--this.count];
};

Stack.prototype.size = function() {
  return this.count;
};


