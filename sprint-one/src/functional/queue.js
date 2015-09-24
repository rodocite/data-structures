var Queue = function(){
  var someInstance = {};
  var first = 0;
  var last = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[++last] = value;
  };

  someInstance.dequeue = function(){
    if(someInstance.size() === 0) {
      return 'The Queue is empty. Please ensure there are values before attempting to dequeue.';
    }
    return storage[++first];
  };

  someInstance.size = function(){
    return last - first;
  };

  return someInstance;
};
