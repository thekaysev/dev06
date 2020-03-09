console.log("waiting for button click...");
function sayHi(){
  console.log("user clicked the magic butto");
  console.log("initiating sayHi() function");
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  console.log("user input is" + name);
  console.log("outputting greeting message");
  txtOutput.value = "Hi there, " + name + "!";
  console.log("user can see the greeting");
}

function countLetters() {
  console.log("initiating countLetters() function");
  var txtName = document.getElementById("txtName");
  var letters = document.getElementById("letters");
  var name = txtName.value;
  console.log("user name is " + name);
  var count = name.length;
  console.log("name length is" + count);
  console.log("outputting name length")
  letters.value = "There are " + count + " letters in your name.";
  console.log("user can see the length of their name")
 }