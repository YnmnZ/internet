let firstP = document.getElementById("zuck");
let secondP = document.getElementById("musk");
let thirdP = document.getElementById("gates");

let hackLocation = document.getElementById("content")

let userName = prompt("Enter your first name as user name.");

let hacker = ["Cindy","Charlene","Caroline","Sabria","Siyue","Si Yue", "Si yue","Ashrita","Syna","Hailey","Lily","Haley","Jackson","Eileen","Cher","Kat","Heloise","Eva","Helen","Yanmin","Kaia","Effie"]

for (var i = hacker.length - 1; i >= 0; i--) {
	if (userName == hacker[i]) {
		console.log(hacker[i]);
		hack();
	}
}

PowerGlitch.glitch('.glitch', { playMode: 'always' })
PowerGlitch.glitch('.Cglitch', {
  "playMode": "always",
  "createContainers": true,
  "hideOverflow": false,
  "timing": {
    "duration": 2250
  },
  "glitchTimeSpan": {
    "start": 0,
    "end": 1
  },
  "shake": {
    "velocity": 8,
    "amplitudeX": 0.1,
    "amplitudeY": 0.1
  },
  "slice": {
    "count": 6,
    "velocity": 15,
    "minHeight": 0.02,
    "maxHeight": 0.15,
    "hueRotate": true
  },
  "pulse": false
})

let zuckWorth = Math.floor(Math.random() * 10000000000) + 70000000000;
let muskWorth = Math.floor(Math.random() * 10000000000) + 190000000000;
let gatesWorth = Math.floor(Math.random() * 10000000000) + 110000000000;
let zuckRise = 0;
let muskRise = 0;
let gatesRise = 0;


setInterval(numberIncrease,300);
// setInterval(numberCheck,1000);

function numberIncrease() {
	zuckRise = Math.floor(Math.random() * 10000) + 10000;
	muskRise = Math.floor(Math.random() * 10000) + 10000;
	gatesRise = Math.floor(Math.random() * 10000) + 10000;

	zuckWorth += zuckRise;
	muskWorth += muskRise;
	gatesWorth += gatesRise;

	firstP.innerText = "$ " + zuckWorth.toLocaleString();
	secondP.innerText = "$ " + muskWorth.toLocaleString();
	thirdP.innerText = "$ " + gatesWorth.toLocaleString();
}

function numberCheck() {
	console.log ("zuck is worth " + zuckWorth);
	console.log ("musk is worth " + muskWorth);
	console.log ("gates is worth " + gatesWorth);
}

function hack() {
	let generateHack = document.createElement("DIV");
	generateHack.classList.add("article");

	let generateTitle = document.createElement("A");
	generateTitle.classList.add("articleTitle");
	generateTitle.classList.add("Cglitch");
	generateTitle.href = 'indexAlter.html';
	generateTitle.innerText = "**#5%^&bRK_$0"

	let generateAbs = document.createElement("P");
	generateAbs.classList.add("articleText");
	generateAbs.classList.add("Cglitch");
	generateAbs.innerText = 'hElLo ThErzE! tHeY nO iM hEre. u Mst eScpe.'

	let generateThumb = document.createElement("A");
	generateThumb.classList.add("articleThumb");
	// generateThumb.classList.add("Cglitch");
	generateThumb.href = 'indexAlter.html';

	let generateImg = document.createElement("IMG");
	generateImg.src = "";
	generateThumb.appendChild(generateImg);

	generateHack.appendChild(generateTitle);
	generateHack.appendChild(generateAbs);
	generateHack.appendChild(generateThumb);

	hackLocation.appendChild(generateHack);
}