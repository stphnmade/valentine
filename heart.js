function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️"; // Unicode heart
  heart.classList.add("heart");

  // Random position along the width
  heart.style.left = Math.random() * 200 + "vw";

  // Random size for variation
  const size = Math.random() * 20 + 10; // Size between 10px to 30px
  heart.style.fontSize = size + "px";

  // Random animation duration
  const duration = Math.random() * 3 + 2; // Between 2s to 5s
  heart.style.animationDuration = duration + "s";

  // Add heart to the body
  document.body.appendChild(heart);

  // Remove after animation ends
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Generate hearts at intervals
setInterval(createHeart, 300);

function teleportNo() {
  const noBtn = document.querySelector(".no-btn");
  const newX = Math.random() * (window.innerWidth - 100); // Avoiding edges
  const newY = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}

// Alert when "Yes" is clicked
function sayYes() {
  // alert("LFGGGGGGGGGGGG! I'll see you on the 14th! 💘🥰");

  document.getElementById("popup").style.display = "block";
  setTimeout(() => {
    document.getElementById("popup").style.display = "none";
  }, 18000);

  const music = document.getElementById("valentineMusic");
  music.play();
}
