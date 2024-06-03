function calcular() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let dobrasInputs = document.querySelectorAll('.dobras');
    let dobras = Array.from(dobrasInputs).map(input => parseFloat(input.value));
    let idade = parseInt(document.getElementById('idade').value);
    let sexo = document.getElementById('sexo').value;
    
    let imc = calcularIMC(peso, altura);
    let percentualGordura = calcularPercentualGordura(dobras, idade, sexo);
    
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Percentual de gordura corporal: ${percentualGordura.toFixed(2)}%`;
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function calcularPercentualGordura(dobrasCutaneas, idade, sexo) {
    let somaDobras = dobrasCutaneas.reduce((total, valor) => total + valor, 0);
    let densidadeCorporal;
    
    if (sexo.toLowerCase() === "masculino") {
        densidadeCorporal = 1.112 - (0.00043499 * somaDobras) + (0.00000055 * somaDobras * somaDobras) - (0.00028826 * idade);
    } else if (sexo.toLowerCase() === "feminino") {
        densidadeCorporal = 1.097 - (0.0004 * somaDobras) + (0.00000058 * somaDobras * somaDobras) - (0.000128 * idade);
    } else {
        return "Sexo inválido. Escolha 'masculino' ou 'feminino'.";
    }
    
    let percentualGordura = ((4.95 / densidadeCorporal) - 4.5) * 100;
    return percentualGordura;
}
