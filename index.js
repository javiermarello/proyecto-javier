/*La idea del HTML es una web de cursos de idioma donde haya una pagina con un boton "inscribirme" que me lleve a otra pagina con el formulario de inscripción. 
En ese formulario estarian los siguientes campos:
-Selecciona la forma de PAGO: Efvo/Tarjeta (Si elige efectivo, arroja "dirijase a la secretaría de lun a vier de 8 a 20 hs para abonar" sino se habilita el siguiente bloque.)
-Selecciona la TARJETA: Mastercard /Visa (si eligio una tarjeta se habilita el siguiente bloque)
-Ingresa tu CORREO electronico donde recibiras la informacion del pago: (si ingresa el mail se habilita el siguiente bloque)
-Selecciona la cantidad de CUOTAS: 1/3/6/12 (si ingresa la cantidad de pagos, le aparece un mensaje con el valor de cada pago y se habilita el boton "pagar")
Boton "Pagar" Me lleva a otra pagina donde ingreso los datos de la tarjeta, mes y año de vencimiento, y codigo.*/

/*Ingresos:
Ingresa Nombre (Si ingresa texto puede seguir)
Ingresa DNI (si ingresa 8 digitos puede seguir)
Ingresa Mail (si ingresa texto y @ puede seguir)
Selecciona Curso /Aleman /Ingles /frances /Portugues /Italiano /Chino (Si selecciona al menos 1 curso puede seguir)
Selecciona Foma de pago  /Efectivo /Tarjeta (Si selecciona Efectivo le indica que se acerque a secretaría. Si selecciona Tarjeta puede seguir)
Selecciona Tarjeta /Visa /Mastercard (Si selecciona una opcion puede seguir)
Ingresa Numero Tarjeta (si ingresa 16 numeros puede seguir)
Ingresa Mes vencimiento Tarjeta (si ingresa del 01 al 12 puede seguir)
Ingresa Año Vencimiento Tarjeta (si ingresa del 22 al 50 puede seguir) (El sistema arroja el monto a abonar en 1 cuota, nombre del curso, duración, monto a abonar y pregunta si acepta. Si acepta habilita el boton pagar, Sino el boton queda deshabilitado)
Selecciona Pagar*/


//  ESTO ES UNA PRUEBA...

// let pago = ``

// do {

//     pago = prompt("ingrese la forma de pago");

//     if (pago == "efectivo") {
//         alert("Para pagos en efectivo dirijase de lun a vier de 8 a 20hs a Av Pte Peron 1821")
//         console.log(`Ha seleccionado ${pago}`);
//     } else if (pago == "tarjeta") {

//         let tarjeta = ``

//         do {

//             tarjeta = prompt("con que tarjeta desea abonar?");

//             if (tarjeta == "visa" || tarjeta == "mastercard") {
//                 alert(`Ud abonara con la tarjeta ${tarjeta}`);
//                 console.log(`tarjeta seleccionada ${tarjeta}`);
//             } else {
//                 alert(`No aceptamos la tarjeta ${tarjeta}, con que otra tarjeta puede abonar?`)
//             }

//         }
//         while (tarjeta != ``)

//     } else {
//         alert("El medio de pago no existe, seleccione otro medio de pago");
//     }

// }
// while (pago != ``)


/*const cursos[aleman, portugues, italiano, frances, ingles, chino];

class Inscripcion{
    constructor(nombreApellido, mail, dni, curso, pago, tarjeta, numTarjeta, mesTarjeta, añoTarjeta){
        this.nombre = nombreApellido;
        this.mail = mail;
        this.dni = dni;
        this.curso = curso;
        this.formaPago = pago;
        this.tarjeta = tarjeta;
        this.numero = numTarjeta;
        this.mes = mesTarjeta;
        this.año= añoTarjeta;
        this.vendido = false;
    }
    
    vender(){
        this.vendido = true;
    }
    
    }
    
    let pago = ``
    
    do {
    
        nombre = prompt("ingrese su nombre completo");
    
        if (nombre != "") {
            alert(`Ha ingresado el nombre ${nombre}`)
            console.log(`Ha ingresado ${nombre}`);
        
    
            let tarjeta = ``
    
            do {
    
                tarjeta = prompt("con que tarjeta desea abonar?");
    
                if (tarjeta == "visa" || tarjeta == "mastercard") {
                    alert(`Ud abonara con la tarjeta ${tarjeta}`);
                    console.log(`tarjeta seleccionada ${tarjeta}`);
                } else {
                    alert(`No aceptamos la tarjeta ${tarjeta}, con que otra tarjeta puede abonar?`)
                }
    
            }
            while (tarjeta != ``)
    
        } else {
            alert("El medio de pago no existe, seleccione otro medio de pago");
        }
    
    }
    while (pago != ``)
    */




arregloPersonas = [];
arregloMail = [];
arregloDni = [];
arregloCursos = [];


let nombreApellido = ``

do{

let nombreApellido = prompt("ingrese su nombre");
if(nombreApellido != " "){
arregloPersonas.push(nombreApellido.toUpperCase());
}

for(i=0; i < arregloPersonas.length; i++){

    console.log(arregloPersonas[i]);

    
}  
}
while (nombreApellido != ``)

let mail = ``

do{

let mail= prompt("ingrese su correo electronico");
if(mail != " "){
arregloMail.push(mail);
}

for(i=0; i < arregloMail.length; i++){

    console.log(arregloMail[i]);

    
}  
}
while (mail != ``)


let dni = ``

do{

let dni= prompt("ingrese su numero de DNI");
if(dni != " "){
arregloDni.push(dni);
}

for(i=0; i < arregloDni.length; i++){

    console.log(arregloDni[i]);

}  
}
while (dni != ``)



let cursos = ``

do{

let cursos= prompt("En que curso queres inscribirte?");
if(cursos == "aleman" || cursos == "ingles" || cursos == "chino" || cursos == "frances" || cursos == "italiano" || cursos == "portugues"){
arregloCursos.push(cursos);
}

cursos = prompt("El curso ingresado no esta disponible.")


}
while (cursos != ``)
