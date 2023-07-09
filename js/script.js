let telaMaior = document.getElementById("resultado");
let telaMenor = document.getElementById("conta");

let primeiroNumero;
let segundoNumero;
let operador;
let decimal = false;
var neg = false;
let resultado;
let bandeira = true; // para vericar se ja subtituiu o 0 que aparece na tela maior assim que o app eh iniciado


function zerar() {
    primeiroNumero = undefined;
    operador = undefined;
    segundoNumero = undefined;
    decimal = false;
    neg = false;
    bandeira = true;

}

function limparTelas() {
    telaMaior.innerText = 0;
    telaMenor.innerText = "";
    zerar();
}

function calcular(segNum = segundoNumero) {
    if (!Number.isInteger(Number(segundoNumero)))
        segundoNumero = segNum != undefined ? segNum : parseFloat(telaMaior.innerText);
    else
        segundoNumero = segNum != undefined ? segNum : parseInt(telaMaior.innerText);

    switch (operador) {
        case "+":
            resultado = primeiroNumero + segundoNumero
            break;
        case "-":
            resultado = primeiroNumero - segundoNumero
            break;
        case "x":
            resultado = primeiroNumero * segundoNumero
            break;
        case "/":
            resultado = primeiroNumero / segundoNumero
            break;

        default:

            break;
    }

    if (resultado != undefined && resultado != NaN && operador != undefined) {
        telaMenor.innerText = primeiroNumero + operador + segundoNumero;
        telaMaior.innerText = limitarDigitos(resultado, 9);
        zerar();
    }
}

function limitarDigitos(numero, digitos) {
    return parseFloat(numero.toPrecision(digitos));
}

function operacao(tipo) {

    if (!Number.isInteger(primeiroNumero))
        primeiroNumero = parseFloat(telaMaior.innerText);
    else
        primeiroNumero = parseInt(telaMaior.innerText);

    telaMenor.innerText = primeiroNumero + tipo;
    operador = tipo;

    telaMaior.innerText = primeiroNumero;

    decimal = false;
    bandeira = true;
}

function virgula() {

    if (!decimal) {
        if (telaMaior.innerText != "0") {
            if (Number.isInteger(Number(telaMaior.innerText)))
                telaMaior.innerText += ".";
        }
        else
            telaMaior.innerText = "0.";
        decimal = true;
        bandeira = false;
    }

}


function negPos() {
    if (!Number.isInteger(primeiroNumero))
        primeiroNumero = parseFloat(telaMaior.innerText);
    else
        primeiroNumero = parseInt(telaMaior.innerText);

    if (primeiroNumero != "0") {
        primeiroNumero *= -1;

        telaMaior.innerText = primeiroNumero;
    }
}

function porcentagem() {
    if (!Number.isInteger(primeiroNumero))
        primeiroNumero = parseFloat(telaMaior.innerText);
    else
        primeiroNumero = parseInt(telaMaior.innerText);


    if (operador == "+" || operador == "-")
        calcular(primeiroNumero * (primeiroNumero / 100));
    else if (operador == "x" || operador == "/")
        calcular((primeiroNumero / 100));
}

function escrever(digito) {

    digito += ""; // força variavia ser string para fazer validaçao da quantidade de digitos
    if (telaMaior.innerText.length + digito.length < 8) {
        if (telaMaior.innerText == "0" || bandeira) {
            telaMaior.innerText = digito;
            bandeira = false;
        }
        else {
            telaMaior.innerText += digito;
        }
    }
}