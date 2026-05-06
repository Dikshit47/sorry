// Typewriter
const text = "Galti meri thi… aur main samajh nahi paaya… Aap hamesha important thi… main bas better banna chahta hu… Please ek chance de dijiye ❤️";
let i = 0;

function typeEffect() {
  if (document.getElementById("typeText")) {
    if (i < text.length) {
      document.getElementById("typeText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 40);
    }
  }
}
typeEffect();

// Music
function startMusic() {
  document.getElementById("bgMusic").play();
}

// Buttons
function yesClick() {
  document.getElementById("response").innerHTML = "Thank you… main iss baar sab sahi karunga ❤️";
}

function noClick() {
  document.getElementById("response").innerHTML = "Main wait karunga… jab tak aap ready ho ❤️";
}

// Hidden
function showHidden() {
  document.getElementById("hiddenMessage").style.display = "block";
}
