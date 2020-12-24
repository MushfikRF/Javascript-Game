let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function convertToWord(letter) {
	if (letter === "r") {
		return "Rock";
	}
	if (letter === "p") {
		return "paper";
	}
	return "Scissors";
}
function win(user, computer) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = " (user) ".fontsize(3).sup();
	const smallCompWord = " (Comp) ".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} beats   ${convertToWord(computer)}${smallCompWord}  . you win `;
	document.getElementById(user).classList.add("green-glow");
	setTimeout(function () {
		document.getElementById(user).classList.remove("green-glow");
	}, 1000);
}

function lose(user, computer) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = " (user) ".fontsize(3).sup();
	const smallCompWord = " (Comp) ".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} loses to   ${convertToWord(computer)}${smallCompWord}  . you lost...  `;
	document.getElementById(user).classList.add("red-glow");
	setTimeout(function () {
		document.getElementById(user).classList.remove("red-glow");
	}, 1000);
}
function draw(user, computer) {
	const smallUserWord = " (user) ".fontsize(3).sup();
	const smallCompWord = " (Comp) ".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} equals   ${convertToWord(computer)}${smallCompWord}  . it's a Draw... `;
	document.getElementById(user).classList.add("grey-glow");
	setTimeout(function () {
		document.getElementById(user).classList.remove("grey-glow");
	}, 1000);
}

function Game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sr":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener("click", function () {
		Game("r");
	});
	paper_div.addEventListener("click", function () {
		Game("p");
	});
	scissor_div.addEventListener("click", function () {
		Game("s");
	});
}

main();
