PowerGlitch.glitch('.glitch', { playMode: 'hover' })

let site = document.getElementById("art");

let keyword = 
	["Buy",
	"Money",
	"Control",
	"Data",
	"Information",
	"Observe",
	"Give",
	"Pay",
	"Manipulate",
	"Program",
	"Fame"];

let keyID = Math.floor(Math.random() * keyword.length);
let titleNum = Math.floor(Math.random() * 15);
let textNum = Math.floor(Math.random() * 200) + 1100;

let titleOutput = keyword[keyID];
let textOutput = keyword[keyID];

for (var i = 1; i <= titleNum; i++) {
	titleOutput = titleOutput + " " + keyword[keyID];
}

for (var i = 1; i <= textNum; i++) {
	textOutput = textOutput + " " + keyword[keyID];
}

// console.log(textOutput);

let geneArticle = document.createElement("DIV");
geneArticle.classList.add("contentArticle");

let geneTitle = document.createElement("H3");
geneTitle.classList.add("articleTitle");
geneTitle.innerText = titleOutput;

let geneText = document.createElement("P");
geneText.classList.add("articleText");
geneText.innerText = textOutput;

geneArticle.appendChild(geneTitle);
geneArticle.appendChild(geneText);

site.appendChild(geneArticle);