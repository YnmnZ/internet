let generateTarget = document.getElementById("contentSection");

let gameDatabase = [
	{
		"name" : "Monster Hunter: World",
		"release" : "August, 2018",
		"price" : "$29.99",
		"genre" : "Action",
		"platform" : "Steam",
		"dlc" : "Monster Hunter World: Iceborne",
		"made" : "Capcon",
		"image" : "monster_hunter.jpg",
		"comment" : "A fantastic hunting experience brought by Capcon. Become master of fourteen different weapons to explore this dynamic world! Hunt down monsters, and discover the mystery of the land. Monster Hunter: World has a rewarding combat system that require a lot of time and devotion to master a weapon. For players who are interested in the monsters, Capcon makes all the monsters alive with their intricate AI built not only to fight players but also to make a logical eco-system. The game is a true time-killer, because it requires time to both practice your skills and collect resources for equipment upgrades."
	},
	{
		"name" : "Firework",
		"release" : "Feburary, 2021",
		"price" : "$9.99",
		"genre" : "Horror, Puzzle",
		"platform" : "Steam",
		"dlc" : "None",
		"made" : "Shiying Studio",
		"image" : "yanhuo.jpg",
		"comment" : "A Chinese indie horror game. Experience the story-driven horror game set in rural China. Travel between the world of the living and the dead to find out the truth of a bizarre suicide. Firework is a game focused on story itself. Horror elements are tools to tell the story. Without any jump scares, the game bases its horror on the atmosphere it creates. The game may not be as intense as other horro games, but the story is very well written. The game is highly recommended if you are familiar with Chinese culture. "
	},
	{
		"name" : "Divinity: Original Sin 2",
		"release" : "September, 2019",
		"price" : "$44.99",
		"genre" : "Turn-based, Role Playing",
		"platform" : "Steam",
		"dlc" : "None",
		"made" : "Larian Studios",
		"image" : "divinity.jpg",
		"comment" : "Welcome to the world of sword and magic! Choose how you progress the story and define your characters based on your choices! Talk to people, sneak around or fight your way through! You are totally free to choose how you want to play this game. Divinity: Original Sin 2 gives its player as much freedom as possible. There are always multiple ways to finish a quest and the player is constantly choosing between options in this DnD-like world. Your skills are not only for combat: use teleportation to leave dangerous places, or steal things with invisibility."
	}
	]

for (var i = 0; i < gameDatabase.length; i++) {
	createElement(gameDatabase[i],i);
}

function createElement(inputJson,number)
{
	// Basic grid
	let newBlock = document.createElement("DIV");
	newBlock.classList.add("block");
	if (number == gameDatabase.length - 1) 
	{
		newBlock.classList.add("finalBlock");
	}

	let newName = document.createElement("H3");
	newName.classList.add("name");
	newName.innerText = inputJson['name'];

	let newFact = document.createElement("DIV");
	newFact.classList.add("fact");

	let newImg = document.createElement("IMG");
	newImg.src = inputJson['image'];

	let newComment = document.createElement("P");
	newComment.classList.add("comment");
	newComment.innerText = inputJson['comment'];

	newBlock.appendChild(newName);
	newBlock.appendChild(newFact);
	newBlock.appendChild(newImg);
	newBlock.appendChild(newComment);

	// Inside the fact box
	let newRelease = document.createElement("P");
	newRelease.classList.add("release");
	newRelease.innerText = "Release Date: " + inputJson['release'];

	let newPrice = document.createElement("P");
	newPrice.classList.add("price");
	newPrice.innerText = "Price: " + inputJson['price'];

	let newGenre = document.createElement("P");
	newGenre.classList.add("genre");
	newGenre.innerText = "Genre: " + inputJson['genre'];

	let newPlatform = document.createElement("P");
	newPlatform.classList.add("platform");
	newPlatform.innerText = "Available Platform: " + inputJson['platform'];

	let newDLC = document.createElement("P");
	newDLC.classList.add("dlc");
	newDLC.innerText = "Important DLC: " + inputJson['dlc'];

	let newMade = document.createElement("P");
	newMade.classList.add("made");
	newMade.innerText = "Made by: " + inputJson['made'];

	newFact.appendChild(newRelease);
	newFact.appendChild(newPrice);
	newFact.appendChild(newGenre);
	newFact.appendChild(newPlatform);
	newFact.appendChild(newDLC);
	newFact.appendChild(newMade);

	generateTarget.appendChild(newBlock);
}