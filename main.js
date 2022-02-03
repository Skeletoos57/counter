let count = 0;

let counter = document.getElementById("counter");

let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

increase.addEventListener('click', function() { addOne() });
window.addEventListener("keydown", (evento) => {
	
	if (evento.code == "Space") {
		addOne()
	}
});
decrease.addEventListener('click', function() { substractOne() });
reset.addEventListener('click', function() { resetCount() });

function addOne() {
	count++;
	updateCounter()
}

function substractOne() {
	count--;
	updateCounter()
}

function resetCount() {
	count = 0;
	updateCounter()
}

function updateCounter() {
	counter.innerHTML = count;
}