const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const pesoSpan = document.querySelector('.input__peso .peso__massa');
const alturaSpan = document.querySelector('.input__altura .altura__metros');

pesoInput.addEventListener('input', function () {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.setProperty('--value', `${value}%`);
    pesoSpan.textContent = `${this.value}Kg`;
});

alturaInput.addEventListener('input', function () {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.setProperty('--value', `${value}%`);
    alturaSpan.textContent = `${this.value}m`;
});
