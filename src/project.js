function Project() {
   	this.iterations = [];
   	//stores all iterations added
};

Project.prototype.addIteration = function(iteration) {
	this.iterations.push(iteration);
	//adds an iteration to the iterations array
};

Project.prototype.velocity = function() {
	  //keeps track of the 3 (or less) most recent projects
	  var totalPoints = 0;
	  var size = this.iterations.length;
	  //takes care of zero case
	  if (size == 0) {
	  	return 0;
	  }
	  //takes care of less than 3 iterations in the project
      else if (size < 3) {
        for (var i = 0; i < size; i++) {
          totalPoints += this.iterations[i].totalPoints();
        }
        return totalPoints / size;
      }
      //adds the last 3 iteration points and gets the average for the velocity
      else {
        totalPoints += (this.iterations[size - 1]).totalPoints();
        totalPoints += (this.iterations[size - 2]).totalPoints();
        totalPoints += (this.iterations[size - 3]).totalPoints();
      }
      return totalPoints / 3;
};


