function Project() {
    this.iterations = new Array();
};

Project.prototype.addIteration = function(iteration) {
	iterations.appendChild(Iteration);
};

Project.prototype.velocity = function() {
	  var totalPoints = 0;
      if (iterations.length < 3) {
        for (var i = 0; i < iterations.length; i++) {
          totalPoints += iterations[i];
        };
        return totalPoints / iterations.length;
      };
      else {
        totalPoints += iterations[iterations.length - 1];
        totalPoints += iterations[iterations.length - 2];
        totalPoints += iterations[iterations.length - 3];
        return totalPoints / 3;
      };
};


