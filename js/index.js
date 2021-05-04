function getName() {
  person = prompt("Wat is jouw naam", "");
  if (person != null) {
    document.getElementById("start").innerText = "";
    document.getElementById("name").innerHTML =
      "Hallo " +
      person +
      ", hoe gaat het vandaag? <br> Zullen we een spelletje doen?";
    document.getElementById("newgame").innerHTML =
      "<button class='flexbox' onclick='playGame()'>ja!</button>";
  }
  console.log("naam");
}

function getRandomInt(min, max) {
  console.log("random");
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function newGame() {
  console.log(person);
  console.log("new game");
  document.getElementById("name").innerHTML =
    "Bedankt voor het spelen " + person + ". <br> Wil je nog een keer?";

  document.getElementById("start").innerText = "";
  document.getElementById("newgame").innerText = "";
  document.getElementById("cancel").innerText = "";
  playGame();
}

function playGame() {
  document.getElementById("start").innerText = "";
  document.getElementById("name").innerText = "";
  document.getElementById("newgame").innerText = "";
  let NumberToGuess = getRandomInt(1, 25);
  console.log(NumberToGuess);
  let UserGuess = undefined;
  while (UserGuess != NumberToGuess) {
    console.log("niet geraden");
    UserGuess = prompt("Welk nummer tussen 1 en 25 denk je dat ik heb?");
    if (UserGuess != NumberToGuess) {
      console.log("geen match");
      alert("nee, " + UserGuess + " is niet goed. Probeer opnieuw");
    } else {
      console.log("wel een match");
      alert("ja! goed");
    }
  }

  document.getElementById("name").innerHTML =
    "Bedankt " +
    person +
    ", dat was leuk! <br> Zullen we nog een keer een spelletje doen?";
  document.getElementById("newgame").innerHTML =
    "<button class='flexbox' onclick='newGame()'>ja</button>";
  document.getElementById("cancel").innerHTML =
    "<button class='flexbox' onclick='end()'>nee</button>";
}

function end() {
  alert("Bedankt voor het spelen en tot de volgende keer, " + person + "!");
  location.reload();
}
