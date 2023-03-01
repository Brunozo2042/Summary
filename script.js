let categories = [
	{
		category: "Reaction",
		score: 100,
		icon: "./assets/images/icon-reaction.svg"
	},
	{
		category: "Memory",
		score: 100,
		icon: "./assets/images/icon-memory.svg"
	},
	{
		category: "Verbal",
		score: 100,
		icon: "./assets/images/icon-verbal.svg"
	},
	{
		category: "Visual",
		score: 100,
		icon: "./assets/images/icon-visual.svg"
	},
	{
		percent: "60%"
	}
]

let ResRe = document.getElementById("ResReaction");
let ResMe = document.getElementById("ResMemory");
let ResVe = document.getElementById("ResVerbal");
let ResVis = document.getElementById("ResVisual");
let avarage = document.getElementById("avarage");
let percent = document.getElementById("percent");
let inf = document.querySelector("#status");


ResRe.innerHTML = categories[0].score
ResMe.innerHTML = categories[1].score
ResVe.innerHTML = categories[2].score
ResVis.innerHTML = categories[3].score

let soma = 0

for (let i = 0; i < 4; i++) {
	soma += categories[i].score
	console.log(soma)
}

let media = Math.round(soma / 4)

avarage.innerHTML = media

console.log(media)

if (media >= 0 && media <= 25) {
	inf.innerHTML = "Terrible"
} else if (media > 25 && media <= 50) {
	inf.innerHTML = "Bad"
} else if (media > 50 && media <= 75) {
	inf.innerHTML = "Great"
} else if (media > 75 && media <= 100) {
	inf.innerHTML = "Awesome"
}

percent.innerHTML = categories[4].percent