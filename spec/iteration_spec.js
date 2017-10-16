describe("Iteration", function() {

	function Iteration() {
		points: 0;

		addPoints: function(number) {
			points = points + number;
		};

		totalPoints: function() {
			return points;
		};
	};

  it("should return the correct number of points", function() {
    var iteration = new Iteration();
    iteration.addPoints(1);
    expect(iteration.totalPoints()).toEqual(1);
    iteration.addPoints(3);
    expect(iteration.totalPoints()).toEqual(4);
  });

});
