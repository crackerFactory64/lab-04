let userPhone = prompt("What phone brand do you use?");

function reactToUserPhone(){
  if (userPhone == "" || userPhone == null){
    alert("Please enter a phone brand, this cannot be empty.")
    location.reload();    
  } else if (userPhone.toLowerCase() == "samsung") {
    alert("Snap!");
  } else {
    alert("Oh...");
  }
}

reactToUserPhone();


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

