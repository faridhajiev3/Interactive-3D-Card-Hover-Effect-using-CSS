const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = card;
    const { offsetX: x, offsetY: y } = e;

    const rotateX = ((y / height) - 0.5) * -40;
    const rotateY = ((x / width) - 0.5) * 40;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});