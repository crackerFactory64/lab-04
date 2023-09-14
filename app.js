let userPhone = prompt("What phone do you use?");

function getUserPhone(){
  if (userPhone == "Samsung" || userPhone == "samsung") {
    alert("Snap!");
  } else {
    alert("Oh...");
  }
}

getUserPhone();


function displayUserPhone(){
  let message = "User's phone: " + userPhone;
  document.write(message);
}


function displayGreeting(){
  const currentTime = new Date().getHours();
  if (currentTime < 12) {
    document.write(" Good morning!");
  } else if (currentTime < 18) {
    document.write(" Good afternoon!");
  } else {
    document.write(" Good evening");
  }
}

