const currentTime = new Date().getHours();
let userPhone = prompt("What phone do you use?");
let message = "User's phone: " + userPhone;

document.write(message);

if (userPhone == "Samsung" || userPhone == "samsung") {
  alert("Snap!");
} else {
  alert("Oh...");
}

if (currentTime < 12) {
  document.write(" Good morning!");
} else if (currentTime < 18) {
  document.write(" Good afternoon!");
} else {
  document.write(" Good evening");
}
