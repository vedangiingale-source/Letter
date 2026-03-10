const card = document.getElementById('card');
const audio = document.getElementById('bgMusic');
const heartsContainer = document.getElementById('hearts-container');
const playBtn = document.getElementById('playMusicBtn');

playBtn.addEventListener('click', () => {
  audio.play(); // play song

  // Generate floating hearts
  const heartInterval = setInterval(() => {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => heartsContainer.removeChild(heart), 5000);
  }, 300);

  // Stop creating hearts after 10
  setTimeout(() => clearInterval(heartInterval), 3000);

  // Hide play button after click
  playBtn.style.display = 'none';
});