function randcolor(){
	var r = Math.floor((Math.random() * 250) + 80);
	var g = Math.floor((Math.random() * 250) + 80);
	var b = Math.floor((Math.random() * 250) + 80);
	var rgb = "rgb(" + r.toString + ", " + g + ", " + b + ")";
	document.body.style.background = rgb;
}
