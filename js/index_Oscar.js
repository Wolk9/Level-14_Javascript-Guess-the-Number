let getRandomNumber = function (min, max) {
  let randomChoice = Math.random() * (max - min) + min;
  let roundedChoice = Math.round(randomChoice);
  return roundedChoice;
};

let numberGame = function (userName, userGuess) {
  while (lives > 0) {
    if (userGuess == randomNumber) {
      alert(
        "Ja! " + randomNumber + " was idd het juiste nummer, " + userName + "!"
      );
      return;
    } else {
      let userGuess = prompt(
        "Helaas, dat is niet goed, " +
          userName +
          "! Ik had " +
          randomNumber +
          " gekozen. Je mag nog " +
          lives +
          " pogingen over.",
        "Vul je nieuwe getal in:"
      );
      lives--;
      numberGame(userName, userGuess);
    }
  }

  alert("Je hebt geen levens meer. Het getal was " + randomNumber + "!");
  return;
};

let lives = 4;

let userName = prompt("Welkom! Wat is je naam?", "Vul hier je naam in");

alert("hey " + userName + "!");

let userChoice = prompt(
  "Zin in een spelletje? Raad het willekeurig getal. Hoe moeilijk wil je het maken? Tussen 0 en hoeveel moet ik een getal kiezen?"
);

let randomNumber = getRandomNumber(0, userChoice);

let userGuess = prompt(
  "Oke. Tussen de 0 en de " + userChoice + " dus. Je hebt 5 pogingen",
  "Welk getal heb ik geraden?"
);

numberGame(userName, userGuess);

alert("Bedankt " + userName + ". Tot de volgende keer!");
