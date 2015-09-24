var Queue = function(){
  var instance  = {};
  _.extend(instance, queueMethods);

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
    return 'The queue is empty. Please enqueue a value before dequeueing.';
  }

  console.log(this.first, this.last)
  return this.storage[this.first++];
};

queueMethods.size = function() {
  // Size represents the last (growing) value in insertion minus the first (decreasing) value in dequeue.
  // In this implementation, first is being incremented on dequeue.
  // All the incrementation represents is that the key will never be revisited once dequeued.
  // Data is preserved in memory, but is inaccessible through the instance.
  return this.last - this.first;
};


