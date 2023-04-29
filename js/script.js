
function sumar(){

    var a, b, c
    a = document.getElementById('numero1').value
    b = document.getElementById('numero2').value
    c = parseFloat(a)+parseFloat(b)
    console.log("el resultado es"+ c)

}
function restar(){

var a, b, c
a = document.getElementById('numer1').value
b = document.getElementById('numer2').value
c = parseFloat(a)- parseFloat(b)
console.log("el resultado es" + c)

}

function multiplicar(){

var a, b, c
a = document.getElementById('nume1').value
b = document.getElementById('nume2').value
c = parseFloat(a) * parseFloat(b)
console.log("el resultado es" + c)

}

function dividir(){

var a, b, c
a = document.getElementById('nu1').value
b = document.getElementById('nu2').value
c = parseFloat(a) / parseFloat(b)


if(b==0){
    console.log('error')
}else{
    console.log("el resultado es" + c)
}

}
