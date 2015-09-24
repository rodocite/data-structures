var Stack = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    // insert value into storage using count as key
      // increment count
    storage[count++] = value;
  };

  someInstance.pop = function(){
    // if storage is empty
      //return error
    // return value from storage 
      // decrement count

    if(someInstance.size() === 0) {
      return 'The stack is empty. Please push a value in before popping.';
    }

    return storage[--count];
  };

  someInstance.size = function( ){
    return count;
  };

  return someInstance;
};
