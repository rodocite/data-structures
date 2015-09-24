var Graph = function(){
  this.universe = {};
};

Graph.prototype.addNode = function(node){
  this.universe[node] = {name: node, edges: {}};
};

Graph.prototype.contains = function(targetNode){
  // Use pluck to create an array of node names
    // Use contains to check if targetNode is found in array
  return _.contains(_.pluck(this.universe, 'name'), targetNode);
};

Graph.prototype.removeNode = function(node){
  delete this.universe[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.universe[fromNode].edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.universe[fromNode].edges[toNode] = toNode;
  this.universe[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.universe[fromNode].edges[toNode];
  delete this.universe[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.universe, function(node, nodeName) {
    cb(nodeName);
  });
};

// I realized that the Graph data structure
// just begs for more functionality
// It was extremely fun implementing some
// that I thought would be useful

// Connects all nodes
Graph.prototype.connectGraph = function() {
  var context = this;
  this.forEachNode(function(node) {
    context.convertToRouter(node);
  });
};

// Disconnects all nodes
Graph.prototype.disconnectGraph = function() {
  var context = this;
  this.forEachNode(function(node) {
    context.isolate(node);
  });
};

// Connects all other nodes to target node
Graph.prototype.convertToRouter = function(targetNode) {
  var context = this;
  this.forEachNode(function(node) {
    context.addEdge(node, targetNode);
  });
};

// Removes all connections from a node
Graph.prototype.isolate = function(node) {
  var context = this;
  _.each(this.universe[node].edges, function(edge) {
    context.removeEdge(node, edge);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



