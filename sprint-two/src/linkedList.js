var LinkedList = function(){
  var list = {};

  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value){
    // Add a new node (object) to list with value as the argument
    //   If list is empty
    //     Set list.head to the new node
    //   Set previous list.tail.next to new node
    //   Set list.tail to new node
    //   Increment count by 1

    list[value] = Node(value);

    if(list.count === 0) {
      list.head = list[value];
    }

    if(list.count > 0) {
      list.tail.next = list[value];
    }

    list.tail = list[value];
    list.count++;
  };

  list.removeHead = function(){
    // Return value of list.head
    //   Set new list.head to next in line
    //   Decrement list.count by 1

    if(list.count === 0) {
      return 'Linked list is empty.'
    }

    var temp = list.head.value;
    list.head = list.head.next;
    list.count--;

    return temp;
  };

  list.contains = function(target){
    // Return true if target is found within linked list
    // Return false if not
    // Actually, you don't even need to delete the properties
    // so long as you only use .next for list traversal

    var found = false;

    // Recursion function that sets found to true
    // if target equals node.value
    var recurse = function(node) {
      if(target === node.value) {
        found = true;
    // Traverses into .next nodes if value isn't found
    // and .next is not null (at the tail)
    // Opted for explicit if-statements so recursion
    // would stop if target is found (conserve memory?)
      } else if (node.next && !found) {
        recurse(node.next);
      }
    };
    
    // Calling recurse on list.head to initiate traversal
    recurse(list.head);
    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
