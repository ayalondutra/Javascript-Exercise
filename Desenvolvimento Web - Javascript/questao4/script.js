function adicionarAoDisplay(caracter) {
    var display = document.getElementById('display');
    display.value += caracter;
}

function calcularExpressao() {
    var display = document.getElementById('display');
    var expressao = display.value;
    try {
        var resultado = eval(expressao);
        display.value = resultado;
    } catch (error) {
        display.value = 'Erro';
    }
}

function limparDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

function limparUltimoCaractere() {
    var display = document.getElementById('display');
    var expressao = display.value;
    var novaExpressao = expressao.substring(0, expressao.length - 1);
    display.value = novaExpressao;
}

function calcularFatorialNaExpressao(expressao) {

    var regex = /\d+/g;
    var numeros = expressao.match(regex); 

    if (numeros === null) {
        return "Nenhum número encontrado na expressão.";
    }

    function calcularFatorial(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            return numero * calcularFatorial(numero - 1);
        }
    }

    var resultados = numeros.map(function(numero) {
        return calcularFatorial(parseInt(numero));
    });

    return resultados;
}

function calcularFatorial() {
    var display = document.getElementById('display');
    var numero = parseFloat(display.value);
    var fatoriais = calcularFatorialNaExpressao(numero.toString());
    display.value = fatoriais.join(', ');
}

