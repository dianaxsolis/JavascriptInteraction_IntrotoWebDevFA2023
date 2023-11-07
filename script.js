function generate () {
	var films = [
		"D.E.B.S",
		"Coraline",
		"Marcel the Shell with Shoes on",
		"Dune",
		"The Peanuts Movie",
		"Shiva Baby",
		"But I'm A Cheerleader",
		"Pitch Perfect",
		"nowhere",
		"Bring it On",
		"Lars and The Real Girl",
		"The Doom Generation",
		"Playtime",
		"Brokeback Mountain",
		"The Shining",
		"Gia"
		];

	var username = document.getElementById ("userInput").value;
	let outputElement = document.getElementById ("outputResult");
	var randomFilm = films [Math.floor(Math.random () * films.length)];

	outputElement.textContent = `${username}, you should watch ${randomFilm}.`;

	restyle (outputElement);

}

function restyle (element) {
	element.style.fontSize= getRandomFontSizes();
	element.style.color = getRandomColors();
	element.style.backgroundColor = getRandomBGColors();

}

function getRandomFontSizes () {
	let fontSizes = ["10px", "12px", "16px", "26px", "40px","60px","100px"];
	return fontSizes [Math.floor (Math.random() * fontSizes.length)];
}

function getRandomColors () {
	let colors = ["red", "blue", "green", "purple"];
	return colors [Math.floor(Math.random() * colors.length)];
}

function getRandomBGColors () {
	let bgcolor = ["lightred", "lightblue", "lightpink", "lightyellow"]
	return bgcolor [Math.floor(Math.random() * bgcolor.length)];
}