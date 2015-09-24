var Queue = function() {
  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.first = 0;
  instance.last = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last++] = value;
};

queueMethods.dequeue = function() {
  if(this.size() === 0) {
    return 'The queue is empty.'
  }

  return this.storage[this.first++];
};

queueMethods.size = function() {
  return this.last - this.first;
};



