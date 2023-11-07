function generate () {
	var films = [
		"D.E.B.S",
		"Coraline",
		"Marcel the Shell with Shoes on",
		"Dune"
		];

	var username = document.getElementById ("userInput").value;
	var output = document.getElementById ('outputResult');
	var randomFilm = films [Math.floor(Math.random () * films.length)];

	output.textContent = `${username}, you should watch ${randomFilm}.`;

function restyle () {

	fontSizes = [
		"10px",
		"12px",
		"16px",
		"26px",
		"40px",
		"60px",
		"100px"]

	colors = [
		"red",
		"green",
		"blue",
		"pink",
		"yellow",
		"purple",
		"black",
		"white"]

	fonts = [
		"Helvetica",
		"Times New Roman",
		"Georgia",
		"Impact",
		"Arial Black",
		"Booksman Old Style"
		]

}