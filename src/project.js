function Project() {
   	this.iterations = new Array();
};

Project.prototype.addIteration = function(iteration) {
	this.iterations.push(iteration);
};

Project.prototype.velocity = function() {
	  var totalPoints = 0;
      if (this.iterations.length < 3) {
        for (var i = 0; i < this.iterations.length; i++) {
          totalPoints += this.iterations[i];
        }
        return totalPoints / this.iterations.length;
      }
      else {
        totalPoints += this.iterations[this.iterations.length - 1];
        totalPoints += this.iterations[this.iterations.length - 2];
        totalPoints += this.iterations[this.iterations.length - 3];
      }
      return totalPoints / 3;
};


