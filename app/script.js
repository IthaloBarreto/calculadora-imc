const botaoCalcular = document.querySelector('.botao button');
const imc = document.querySelector('.imc')
const pesoResultadoImc = document.querySelector('.resultado__peso')

let pesoModificado = false; // Variável para verificar se o peso foi modificado
let alturaModificada = false; // Variável para verificar se a altura foi modificada

// Event listeners para verificar quando os inputs são modificados
document.querySelector('#peso').addEventListener('input', () => {
    pesoModificado = true;
});

document.querySelector('#altura').addEventListener('input', () => {
    alturaModificada = true;
});

function calcularImc() {

    if (alturaModificada === false || pesoModificado === false) {
        alert('Preencha os campos corretamente!')
        return
    }

    const valorPeso = parseFloat(document.querySelector('#peso').value);
    const valorAltura = parseFloat(document.querySelector('#altura').value);

    const valorImc = (valorPeso / (valorAltura * valorAltura)).toFixed(2)

    const pesoRecomendado = (22 * (valorAltura * valorAltura)).toFixed(2)

    imc.innerHTML = `
        <div class="result">
            <div class="imc__titulo">Seu indíce de massa corporal é:</div>
            <span class="imc__resultado">${valorImc} Kg/m²</span>
        </div>
        <div class="recomendado">
            <div class="imc__titulo">Peso recomendado:</div>
            <span class="imc__recomendado imc__resultado">${pesoRecomendado} Kg</span>
        </div>
    `

    let classificacao = '';
    switch (true) {
        case (valorImc < 18.5):
            classificacao = 'MAGREZA';
            break;
        case (valorImc >= 18.5 && valorImc < 25.0):
            classificacao = 'PESO NORMAL';
            break;
        case (valorImc >= 25.0 && valorImc < 30.0):
            classificacao = 'SOBREPESO';
            break;
        case (valorImc >= 30.0 && valorImc < 40.0):
            classificacao = 'OBESIDADE';
            break;
        case (valorImc >= 40.0):
            classificacao = 'OBESIDADE GRAVE';
            break;
        default:
            break;
    }

    pesoResultadoImc.textContent = classificacao
}

botaoCalcular.addEventListener('click', calcularImc);