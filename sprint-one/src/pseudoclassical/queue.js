var Queue = function() {
  this.storage = {};
  this.first = 0; 
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last++] = value;
};

Queue.prototype.dequeue = function() {
  if(this.size() === 0) {
    return 'The queue is empty.';
  }
  return this.storage[this.first++];
};

Queue.prototype.size = function() {
  return this.last - this.first;
};

