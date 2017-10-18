function Project() {
   	this.iterations = [];
};

Project.prototype.addIteration = function(iteration) {
	this.iterations.push(iteration);
};

Project.prototype.velocity = function() {
	  var totalPoints = 0;
	  var size = this.iterations.length;
	  if (size == 0) {
	  	return 0;
	  }
      else if (size < 3) {
        for (var i = 0; i < size; i++) {
          totalPoints += this.iterations[i].totalPoints;
        }
        return totalPoints / size;
      }
      else {
        totalPoints += this.iterations[size - 1].totalPoints;
        totalPoints += this.iterations[size - 2].totalPoints;
        totalPoints += this.iterations[size - 3].totalPoints;
      }
      return totalPoints / 3;
};


