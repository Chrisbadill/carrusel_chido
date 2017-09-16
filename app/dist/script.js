function numeroAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}



var colores=["#0024bf","#ebff00", "#49ff2b", "#F4005E", "#BF00A9"]

var elemento =document.getElementById('uno');

function cambiarColor(){
  elemento.style.backgroundColor = colores[numeroAleatorio(0,4)];
}

//setInterval(cambiarColor,1000)


var valor = function (dato1, dato2){return window.getComputedStyle(dato1, null).getPropertyValue(dato2);}
var uno=document.getElementById('uno');
var dos=document.getElementById('dos');
var tres=document.getElementById('tres');
var contenedor=document.getElementById('contenedor');
console.log('contenedor es :'+ valor(contenedor,"position"));

console.log('uno es :'+ valor(uno,"position"));
console.log('dos es :'+ valor(dos,"position"));
console.log('tres es :'+ valor(tres,"position"));
