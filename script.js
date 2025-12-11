const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

const text = "📖 Eclesiastes 3:1";
const verse = document.querySelector('.verse');
let index = 0;

function typeEffect() {
    verse.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 80);
    }
}

typeEffect();