let telaMaior = document.getElementById("resultado");
let telaMenor = document.getElementById("conta");

let primeiroNumero;
let segundoNumero;
let operador;
let decimal = false;
var neg = false;
let resultado;
let bandeira = true;
let quatidadeDigitos = 0;


function limpar() {
    telaMaior.innerText = 0;
    telaMenor.innerText = "";
    primeiroNumero = undefined;
    segundoNumero = undefined;
    resultado = undefined;
    decimal = false;
    neg = false;
    quatidadeDigitos = 0;
}

function calcular() {
    if (decimal)
        segundoNumero = parseFloat(telaMaior.innerText);
    else
        segundoNumero = parseInt(telaMaior.innerText);

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
        case "+-":
            resultado = primeiroNumero / segundoNumero
            break;
        case "%":
            resultado = primeiroNumero / segundoNumero
            break;

        default:

            break;
    }

    if (resultado != undefined) {
        telaMenor.innerText = primeiroNumero + operador + segundoNumero;
        telaMaior.innerText = resultado;
        primeiroNumero = undefined;
        segundoNumero = undefined;
        resultado = undefined;
        bandeira = true;
    }


}

function operacao(tipo) {
    if (decimal)
        primeiroNumero = parseFloat(telaMaior.innerText);
    else
        primeiroNumero = parseInt(telaMaior.innerText);

    telaMenor.innerText = primeiroNumero + tipo;
    operador = tipo;

    telaMaior.innerText = primeiroNumero;
    quatidadeDigitos = 0;
}

function virgula() {
    if (!decimal)
        telaMaior.innerText += "."
    decimal = true;
}

function negPos() {
    if (decimal)
        primeiroNumero = parseFloat(telaMaior.innerText);
    else
        primeiroNumero = parseInt(telaMaior.innerText);

    if(primeiroNumero != "0")
            primeiroNumero *=-1;
    
    escrever(primeiroNumero);    
}

function escrever(digito) {
    quatidadeDigitos++;

    if (quatidadeDigitos < 10 && telaMaior.innerText.length < 10) {
        if (primeiroNumero == undefined) {
            if (telaMaior.innerText == 0 || resultado != undefined)
                telaMaior.innerText = digito;
            else
                telaMaior.innerText += digito;
        }
        else {
            if (telaMaior.innerText == primeiroNumero || bandeira) {
                telaMaior.innerText = digito;
                bandeira = false;
            }
            else {
                telaMaior.innerText += digito;
            }

        }
    }
}