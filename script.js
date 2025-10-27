function rsvp() {
  const msg = document.getElementById("msg");
  msg.style.display = "block";
  msg.style.animation = "fadeIn 1.5s";
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);
