let numero1 = 10;
let numero2=-15;
let numero3=0;
let nota1=100;
let nota2=75;
let nota3=50;
let nota4=25;

function verificarNumero(valor){
if (valor<0){
    return "El numero es negativo";
}
else if (valor==0){
    return "El numero es 0";
}
else{
    return "el numero es positivo";
}

}

function verificarEdad(edad){
if (edad<18){
    return "No puede votar, es menor de edad";
}
else{
    return "puede votar, es mayor de edad";
}

}

function compararNumero(valor1, valor2){
if (valor1<valor2){
    return "el primer numero es mayor"
}else{
    return "el segundo numero es mayor"
}

}

function divisible(numeroDividir){
if(numeroDividir%5==0){
    return true;
}else{
    return false;
}
}

function clasificarNota(nota){
if(nota>=90){
    return "felicidades Excelente"
}else if (nota<90&&nota>=70){
    return "eres buen estudiante";
}else if (nota>=50&&nota<70){
    return "Por los pelos campeon"
}else{
    return "debes esforzarte más. estas suspendido"
}
}


let prueba =verificarNumero(numero1);
console.log(prueba);
prueba =verificarNumero(numero2);
console.log(prueba);
prueba =verificarNumero(numero3);
console.log(prueba);


let revisarEdad=verificarEdad(24);
console.log(revisarEdad)


let comparativaDosNumeros=compararNumero(numero1,numero2);
console.log(comparativaDosNumeros)


