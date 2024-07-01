function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        const x = event.offsetX;
        const width = gradientElement.offsetWidth; // Променихме това
        const percent = Math.floor((x / width) * 100);
        resultElement.textContent = `${percent}%`;
    });
}
