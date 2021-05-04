function getName() {
  var person = prompt("Wat is jouw naam", "");
  if (person != null) {
    document.getElementById("name").innerHTML =
      "Hallo " +
      person +
      ", hoe gaat het vandaag? <br> Zullen we een spelletje doen?";
    document.getElementById("game").innerHTML = "Ja";
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
  document.getElementById("thanks").innerHTML =
    "Bedankt voor het spelen " + person + ". <br> Wil je nog een keer?";
  document.getElementById("new").innerHTML = "Ja";
  playGame();
}

function playGame() {
  console.log("playgame");
  var NumberToGuess = getRandomInt(1, 25);
  console.log(NumberToGuess);
  var UserGuess = undefined;
  while (UserGuess != NumberToGuess) {
    console.log("niet geraden");
    var UserGuess = prompt("Welk nummer tussen 1 en 25 denk je dat ik heb?");
    if (UserGuess != NumberToGuess) {
      console.log("geen match");
      alert("nee, " + UserGuess + " is niet goed. Probeer opnieuw");
    } else {
      console.log("wel een match");
      alert("ja! goed");
    }
  }

  // dit hieronder voert ie niet uit. Waarom niet?
  document.getElementById("thanks").innerHTML =
    "Bedankt " +
    person +
    ", dat was leuk! <br> Zullen we nog een keer een spelletje doen?";
  document.getElementById("newgame").innerHTML = "Ja";
  document.getElementById("cancel").innerHTML = "Nee";

  // dit hierboven voert ie niet uit. Waarom niet?
}
