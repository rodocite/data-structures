var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // Buckets
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // If bucket is empty
    // Create a new array in the bucket w/ new tuple
  // If bucket is not empty
    // Push tuple into bucket

  if(this._storage.get(0) === undefined) {
    this._storage.set(i, [[k,v]]);
    return [k,v];
  }
  this._storage.get(i).push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = null;
  // Search through bucket
    // Search through array of tuples within bucket index
      // If k is found within a tuple
        // Set temp to the tuple value(second index)
  // Return temp

  this._storage.each(function(bucket, bucketIndex){
    _.each(bucket, function(tuple) {
      if(_.contains(tuple, k)) {
        temp = tuple[1];
      }
    });
  });

  return temp;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Search through bucket
  // Search through array of tuples within bucket index
    // If k is found within a tuple
      // Splice the tuple at the index of k

  this._storage.each(function(bucket){
      _.each(bucket, function(tuple){
        if(_.contains(tuple, k)) {
          tuple.splice(tuple.indexOf(k), 1);
        }
      });
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
