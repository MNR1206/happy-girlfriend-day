const heartsContainer = document.getElementById('hearts');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 5}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 100);

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = 'Pause Music';
    } else {
        bgMusic.pause();
        musicToggle.textContent = 'Play Music';
    }
}
