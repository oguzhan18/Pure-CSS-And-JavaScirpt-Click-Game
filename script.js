
var assets = ["PacMan", "Ghost1", "Ghost2", "Ghost3", "Ghost4", "Ghost5"],
	nextAsset = function() { return assets[assets.length * Math.random() | 0]; },
	anim = ["up", "down", "left", "right"],
	nextAnim = function() { return anim[anim.length * Math.random() | 0]; },
	score = 0,
	speed = 1500,
	points = d3.select("#points"),
	target = d3.select("#target");
	name = prompt("Enter your name");
d3.select("#name").text(name);

d3.interval(play, 500+speed);

function play() {
	target
		.attr("class", nextAsset())
		.style("animation", nextAnim() + " " + speed + "ms linear forwards 1")
		.on("mousedown touchstart", function() {
			if ( d3.select(this).classed("PacMan") ) {
				score += 5;
				if (speed >= 500) {
					speed -= 100;
				} else {
					end(score);
				};
			} else {
				score -= 1;
			}
			points.text(score);
		});
}

function end(s) {
	alert("Congratulations! Your score is " + s + " points!");
	score = 0;
}