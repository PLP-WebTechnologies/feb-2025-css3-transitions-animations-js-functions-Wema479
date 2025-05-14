// JavaScript for dynamic behavior
    const animateBtn = document.getElementById('animateBtn');
    const animatedBox = document.querySelector('.animated-box');

    animateBtn.addEventListener('click', () => {
        animatedBox.style.animation = 'moveBox 2s ease-in-out';
        animatedBox.addEventListener('animationend', () => {
            animatedBox.style.animation = ''; // Reset animation
        });
    });

    // JavaScript for local storage
    const box = document.querySelector('.box');
    const storedColor = localStorage.getItem('boxColor');

    if (storedColor) {
        box.style.backgroundColor = storedColor;
    }

    box.addEventListener('click', () => {
        const newColor = box.style.backgroundColor === 'blue' ? 'yellow' : 'blue';
        box.style.backgroundColor = newColor;
        localStorage.setItem('boxColor', newColor);
    });