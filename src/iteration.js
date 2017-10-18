function Iteration() {
  //keeps track of the points in this iteration
  this.points = 0;
};

Iteration.prototype.addPoints = function(points) {
	//adds points to the points field
	this.points += points;
};

Iteration.prototype.totalPoints = function() {
	//returns all the points added to this iteration
	return this.points;
};

