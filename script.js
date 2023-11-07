function generate () {
	var films = [
		"D.E.B.S",
		"Coraline",
		"Marcel the Shell with Shoes on",
		"Dune"
		];

	var username = document.getElementById ("userInput").value;
	var output = document.getElementById ("outputResult");
	var randomFilm = films [Math.floor(Math.random () * films.length)];

	output.textContent = `${username}, you should watch ${randomFilm}.`;

	restyle (output);

}

function restyle (element) {
	element.style.fontSizes= randomFontSizes();
	element.style.colors = randomColors();
}

function randomFontSizes () {
	let fontSizes = ["10px", "12px", "16px", "26px", "40px","60px","100px"];

	return fontSizes [Math.floor (Math.random() * fontSizes.length)];
}

function randomColors () {
	let colors = ["red", "blue", "green", "purple"];

	return colors [Math.floor(Math.random() * colors.length)];
}