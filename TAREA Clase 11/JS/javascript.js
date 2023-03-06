let topping = ["Oreo", "KitKat", "kinder"];
var precio;
let eleccion = "Kinder";
let mensaje;
let mensajeDos;



console.log(topping[0]);
console.log(topping[1]);
console.log(topping[2]);

    

switch (eleccion) {
    case "Oreo" :
console.log (mensaje = "el precio del toppinge de Oreo es de $" + [precio = 10]);
break;

case "KitKat" :
console.log (mensaje = "el precio del toppinge de KitKat es de $" + [precio = 15]);
break;

case "Kinder" :
console.log (mensaje = "el precio del toppinge de Kinder es de $" + [precio = 25]);
break;      

default:
    console.log ("no tenemos este topping");
    }


var helado = 3;
var precioFinal = precio + helado;

console.log(mensajeDos = "el precio final es de $" + precioFinal);
