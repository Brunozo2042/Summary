let categories =[
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
let content = document.getElementById("content")

function GeraDados(){

	let sum = 0

	
	sum = parseInt(ResRe.value) + parseInt(ResMe.value) + parseInt(ResVe.value) + parseInt(ResVis.value)
	console.log(soma)
	let media = Math.round(sum / 4)

	avarage.innerHTML = media

	content.style.display = "block"

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
}

percent.innerHTML = categories[0].percent