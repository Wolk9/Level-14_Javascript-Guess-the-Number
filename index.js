function getName() {
  if (YourName != null) {
    document.getElementById("YourName").value;
    var input = document.getElementById("YourName");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("NameButton").click();
      }
    });
    document.getElementById("demo").innerHTML =
      "Hello " + YourName.value + "! How are you today?";
  }
}

function getNumber() {
  document.getElementById("game").innerHTML =
    "<input type='text' placeholder='1 to 20' id=YourNumber><button onclick='ChalengeNumber()'>guess</button>";
  if (YourNumber != null) {
  }
}

var NumberToGuess = 8;

function ChalengeNumber() {
  if (YourNumber.value != NumberToGuess) {
    document.getElementById("game").innerHTML =
      "The number " + YourNumber.value + " is not correct, try again";
  } else {
    document.getElementById("game").innerHTML =
      "The number " + YourNumber.value + " is correct!";
  }
}
