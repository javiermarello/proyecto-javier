/*Esta app va orientada al html que hice en DW. La idea es poder ingresar datos personales, chequear disponibilidad de cursos, pagar, etc*/





/* 

    let ingresoNombre = prompt("Ingresá tu nombre por favor");

    while (ingresoNombre == ""){
        ingresoNombre = prompt("[Error] Ingresá un nombre válido por favor");
    }
    alert("Has ingesado: " + ingresoNombre)
 

    let ingresoApellido = prompt("Ingresá tu apellido por favor");

    while (ingresoApellido == ""){
        ingresoApellido = prompt("[Error] Ingresá un apellido válido por favor");
    }
    alert("Has ingesado: " + ingresoApellido)


    let ingresoMail = prompt("Ingresá tu correo electronico por favor");

    while (ingresoMail == ""){
        ingresoMail = prompt("[Error] Ingresá una direccion de mail válida por favor");
    }
    alert("Has ingesado: " + ingresoMail)




let ingresoDni = prompt("Ingresa tu numero de DNI sin puntos ni espacios");

while (ingresoDni == ""){
    ingresoDni = prompt("[Error] Ingresá un numero de DNI valido por favor");
}
while ((ingresoDni <= 9999999 ) && ( ingresoDni >= 99999999 )){
    alert("El numero ingresado no corresponde a un numero de DNI, por favor vuelva a intentarlo")
}
alert("ud ha ingresado el numero " + ingresoDni)




alert("Bienvenido" + " " + ingresoNombre);

alert("Datos Ingresados: " + "Nombre:  " + ingresoNombre + "   . Apellido:  " + ingresoApellido + ".  Mail: " + ingresoMail + "  . DNI: " + ingresoDni);





let turno = prompt("En que turno queres cursar?: \n1- Mañana \n2- Noche");


while(isNaN(turno)){
    turno = parseInt(prompt('[Error] Debes ingresar un numero valido. \n1- Turno Mañana \n2- Turno Noche '))}

if ((turno == "1") || (turno == "2")) {

    let curso = prompt("En que curso estas interesado? \n1- ingles \n2- chino \n3- italiano \n4- portugues \n5- frances \n6- aleman");


    const suma = (a, b) => a + b;
    const multiplicacion = (a,b) => a * 12;
    const iva = x => x * 0.21;

    let precioCuotaIngles = 5800;
    let precioCuotaChino = 9000;
    let precioCuotaItaliano = 7200;
    let precioCuotaPortugues = 5500;
    let precioCuotaFrances = 6500;
    let precioCuotaAleman = 12000;

    let precioMensualIngles = suma(precioCuotaIngles, iva(precioCuotaIngles));
    let precioMensualChino = suma(precioCuotaChino, iva(precioCuotaChino));
    let precioMensualItaliano = suma(precioCuotaItaliano, iva(precioCuotaItaliano));
    let precioMensualPortugues = suma(precioCuotaPortugues, iva(precioCuotaPortugues));
    let precioMensualFrances = suma(precioCuotaFrances, iva(precioCuotaFrances));
    let precioMensualAleman = suma(precioCuotaAleman, iva(precioCuotaAleman));

    let precioAnualIngles = multiplicacion(precioMensualIngles);
    let precioAnualChino = multiplicacion(precioMensualChino);
    let precioAnualItaliano = multiplicacion(precioMensualItaliano);
    let precioAnualPortugues = multiplicacion(precioMensualPortugues);
    let precioAnualFrances = multiplicacion(precioMensualFrances);
    let precioAnualAleman = multiplicacion(precioMensualAleman);


    while (curso != "continuar") {
        switch (curso) {
            case "1":
                alert("el curso IDIOMA INGLES está disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' + precioMensualIngles);
                alert('Total abonado el año completo: ' + '$' + precioAnualIngles);
                break;
            case "2":
                alert("el curso IDIOMA CHINO esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' + precioMensualChino);
                alert('Total abonado el año completo: ' + '$' + precioAnualChino);
                break;
            case "3":
                alert("el curso IDIOMA ITALIANO esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' +  precioMensualItaliano);
                alert('Total abonado el año completo: ' + '$' + precioAnualItaliano);
                break;
            case "4":
                alert("el curso IDIOMA PORTUGUES esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' +  precioMensualPortugues);
                alert('Total abonado el año completo: ' + '$' + precioAnualPortugues);
                break;
            case "5":
                alert("el curso IDIOMA FRANCES esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' +  precioMensualFrances);
                alert('Total abonado el año completo: ' + '$' + precioAnualFrances);
                break;
            case "6":
                alert("el curso IDIOMA ALEMAN esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' +  precioMensualAleman);
                alert('Total abonado el año completo: ' + '$' + precioAnualAleman);
                break;
            default:
                alert("el curso ingresado no esta disponible")
                break;
        }
        curso = prompt("Para continuar con la inscripción escribe 'continuar'")
    }
} else {
    alert("no se puede cursar en ese turno")
}

    





let formaPago = prompt("Como desea abonar?");

if ((formaPago == "tarjeta") && (formaPago != "")){
    let numeroTarjeta = prompt("ingrese los 16 digitos de su tarjeta");
    if ((numeroTarjeta >= 999999999999999 ) && (numeroTarjeta <= 9999999999999999)){
        alert("El numero ingresado es" + numeroTarjeta)
    }
    else{
        formaPago = prompt("el numero ingresado no es válido, vuelva a ingresarlo.")
    }

}
else{
    alert("para pagos en efectivo dirijase a la secretaría del instituto")}





function Curso (nombre,duracion,turno,valor){
    this.nombre = nombre;
    this.duracion = duracion;
    this.turno = turno; 
    this.valor = parseFloat(valor);
    this.respuesta = function(){"hemos registrado tu consulta"}
}


const cursoIngles = new Curso ('curso Ingles','4','mañana','15000');
const cursoChino = new Curso ('curso Chino','4','tarde','18000');
const cursoItaliano = new Curso ('curso Italiano','5','mañana','25000');
const cursoPortugues = new Curso ('curso Portugues','6','mañana','30000');
const cursoFrances = new Curso ('curso Frances','6','tarde','19000');
const cursoAleman = new Curso ('curso Aleman','7','mañana','8000');

let consulta = prompt('en que curso estas interesado? \n1- Ingles \n2- Chino \n3- Italiano \n4- Portugues \n5- Frances \n6- Aleman');


    

while (consulta != "esc") {
    switch (consulta) {
        case "1":
            alert('Duracion= ' + cursoIngles.duracion + ' meses.  Disponible en turno:   ' + cursoIngles.turno + '   Valor total:   ' + cursoIngles.valor + "$");

            break;
        case "2":
            alert('Duracion= ' + cursoChino.duracion + ' meses.   Disponible en turno:   ' + cursoChino.turno + '   Valor total:   ' + cursoChino.valor + "$");
            break;
        case "3":
            alert('Duracion= ' + cursoItaliano.duracion + ' meses.   Disponible en turno:   ' + cursoItaliano.turno + '   Valor total:   ' + cursoItaliano.valor + "$");
            break;
        case "4":
            alert('Duracion= ' + cursoPortugues.duracion + ' meses.   Disponible en turno:   ' + cursoPortugues.turno + '   Valor total:   ' + cursoPortugues.valor + "$");
            break;
        case "5":
            alert('Duracion= ' + cursoFrances.duracion + ' meses.   Disponible en turno:   ' + cursoFrances.turno + '   Valor total:   ' + cursoFrances.valor + "$");
            break;
        case "6":
            alert('Duracion= ' + cursoAleman.duracion + ' meses.   Disponible en turno:   ' + cursoAleman.turno + '   Valor total:   ' + cursoAleman.valor + "$");
            break;
        default:
            alert("el curso ingresado no esta disponible")
            break;
        }
        consulta = prompt("Para continuar con la inscripción escribe esc")
    }
 
*/



/* aplicando objetos, arrays y metodos  */

/*
    
class Curso {

    constructor(idioma, duracion, turno, valor, id) {
        this.idioma = idioma;
        this.duracion = parseInt(duracion);
        this.turno = turno;
        this.valor = parseInt(valor);
        this.id = id;
        this.vendido = false;
    }
   
   /* El length me va a contar los elementos del array y devuelve un numero que me sirve para el nro de item del nuevo curso que se ingrese. */
/*
   
   asignarId(array) {
        this.id = array.length;
    }

    valorar(valoracion) {
        this.valoracion = valoracion;
    } 

    sumarIVA() {
        this.valor = this.valor * 1.21;
    }

    vender() {
        this.vendido = true;
    }

}


const cursos = [
    new Curso('ingles', '9', 'mañana', 25000, 1),
    new Curso('frances', '6', 'mañana', 32000, 2),
    new Curso('italiano', '12', 'tarde', 45000, 3),
    new Curso('chino', '23', 'noche', 62000, 4),
    new Curso('aleman', '10', 'noche', 34000, 5),
    new Curso('portugues', '15', 'tarde', 27000, 6)
]

console.log(cursos);

*/

/* Consulto el valor del curso (Luego este prompt se reemplaza en el html por una serie de radios con los nombres de los cursos). */

/*
let consultaCurso = prompt('Qué idioma te gustaría aprender?');

const busqueda = cursos.filter((curso)=>curso.idioma.toLowerCase().includes(consultaCurso.toLowerCase()));

if(consultaCurso.length == 0){
    alert('Debe ingresar un idioma')
}
else{
    const imprimible = busqueda.map((objeto)=>objeto.valor);

    let ivaIncluido = Math.round(imprimible*1.21);
    let enUnPago = Math.round(ivaIncluido*1.10);
    let enTresPagos = Math.round((ivaIncluido*1.30)/3);
  
    alert('el valor del curso es: \n- En efectivo (iva incl). ' + '$ ' + ivaIncluido + '\n- Con tarjeta en 1 pago de: ' + '$ '+ enUnPago + '\n- Con tarjeta en 3 pagos de: ' + '$'+ enTresPagos);
    
}

*/


/* Para consultar cursos disponibles por turno (en el html falta agregar la seccion "seleccione turno") */

/*
let consultaTurno = prompt('En que turno te gustaría cursar?');

const busqueda2 = cursos.filter((curso)=>curso.turno.toLowerCase().includes(consultaTurno.toLowerCase()));

if(consultaTurno.length == 0){
    alert('no se encontró el turno')
}else{
    const imprimible = busqueda2.map((objeto)=>objeto.idioma);
    alert('los cursos disponibles en ese turno son: \n- ' + imprimible.join('\n- '));
}


*/

/* para uso del administrador del sitio */

//--Pedir que se ingresen cursos nuevos, transformarlos en un array (con split que me devuelve un array) y sumarlos al array cursos---//

/*
let continuar = true;

while (continuar) {
    let nuevoIngreso = prompt('Ingresa los datos del curso que quieras agregar: idioma, duracion, turno, valor, separados por un guion medio (-). Ingresa X para finalizar');

    if (nuevoIngreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let ingreso = nuevoIngreso.split('-');
    const nuevoCurso = new Curso(ingreso[0], ingreso[1], ingreso[2], ingreso[3], ingreso[4]);

    cursos.push(nuevoCurso);

    nuevoCurso.asignarId(cursos);

    console.log(cursos)
} 

*/



/* 
const btnPago = document.getElementById('pago'),
nombre = document.getElementById('full name'),
mail = document.getElementById('mail'),
dni = document.getElementById('numeroDNI'),
cursoAleman = document.getElementById('aleman'),
radiosCursos = document.querySelectorAll("div.curso input[type='radio']"),
formaPago = document.getElementById('formaPago'),
tarjeta = document.getElementById('tarjeta'); */

/* Para que ingresen los administradores a la parte de ingresar nuevos cursos y se logeen  */
/* modalEl=document.getElementById(modalLogin),
modal = new bootstrap.Modal(modalEl);

console.log(radiosCursos);
 */

/* 

function mensajePersonalizado(nombre){
    alert("hola " + nombre + "! Estas seguro que quieres pagar?")
}
btnPago.addEventListener('click', ()=>{
    let nombreUser = nombre.value;
    mensajePersonalizado(nombreUser);
})  



radiosCursos.forEach(item => {
    item.addEventListener('click', ()=>{
        alert('Seleccionaste el curso ' + item.value)
    })
    
})


nombre.onchange = () => {
    let nombreCompleto= nombre.value
}

 */







class Curso {

    constructor(idioma, duracion, turno, valor, id) {
        this.idioma = idioma;
        this.duracion = parseInt(duracion);
        this.turno = turno;
        this.valor = parseInt(valor);
        this.id = id;
        this.vendido = false;
    }

    //El length me va a contar los elementos del array y devuelve un numero que me sirve para el nro de item del nuevo curso que se ingrese. */


    asignarId(array) {
        this.id = array.length;
    }

    sumarIVA() {
        this.valor = this.valor * 1.21;
    }

    vender() {
        this.vendido = true;
    }

}


const cursos = [
    new Curso('ingles', '9', 'mañana', 25000, 1),
    new Curso('frances', '6', 'mañana', 32000, 2),
    new Curso('italiano', '12', 'tarde', 45000, 3),
    new Curso('chino', '23', 'noche', 62000, 4),
    new Curso('aleman', '10', 'noche', 34000, 5),
    new Curso('portugues', '15', 'tarde', 27000, 6)
]

//let atributo = cursos[2].valor;
//console.log(atributo)


//traigo los elementos que voy a usar del DOM

const nombreUsuario = document.getElementById('fullName'),
    mail = document.getElementById('mail'),
    password = document.getElementById('pass'),
    radiosCursos = document.querySelectorAll("div.curso input[type='radio']"),
    formaPago = document.getElementById('formaPago'),
    tarjeta = document.getElementById('tarjetas'),
    numTarjeta = document.getElementById('numeroTarjeta'),
    clave = document.getElementById('claveTarjeta'),
    añoTarjeta = document.getElementById('añoTarjeta'),
    botonAbrirAlert = document.getElementById('botonInfo'),
    botonPagar = document.getElementById('pago');



//clase constructora de objetos usuarios

/* class usuarioConsulta {
    constructor(nombre, mail, pass, curso, formaPago, tarjeta, numTarjeta, mes, año) {
        this.nombre = nombre;
        this.mail = mail;
        this.pass = parseInt(pass);
        this.curso = curso;
        this.formaPago = formaPago;
        this.tarjeta = tarjeta;
        this.numTarjeta = numTarjeta;
        this.mes = mes;
        this.año = año;
    }
}
 */

//evento para hacer clic sobre el radio y que haga algo

radiosCursos.forEach(item => {
    item.addEventListener('click', () => {
        let radioSeleccionado = item.value;

        encontrado = cursos.find(curso => curso.idioma == radioSeleccionado);

    })
})

let encontrado;


function guardarDatos(storage) {

    let user = document.getElementById('fullName').value;
    let mail = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    let curso = document.getElementById(encontrado.idioma);
  

    const usuario = {
        'user': user,
        'mail': mail,
        'pass': pass,
        'curso': encontrado.idioma
       
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}


botonAbrirAlert.addEventListener('click', (e) => {
            e.preventDefault();

            Swal.fire({
                title: `<p> Hola ${nombreUsuario.value}! Revisa tus datos antes de continuar.</p>`,
                html: `<li>Tu nombre completo: ${nombreUsuario.value}</li> <li>Tu mail: ${mail.value}</li> <li>Elegiste el curso: ${encontrado.idioma}</li><li>Duracion: ${encontrado.duracion} meses</li><li>Valor total: $${encontrado.valor}</li>`,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Guardar y continuar',
                denyButtonText: 'Continuar sin guardar',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.value) {
                    Swal.fire('Datos guardados!', '', 'success')

                  guardarDatos(localStorage);

                } else if (result.isDenied) {
                    Swal.fire('Tus datos no fueron guardados', '', 'info');

                    guardarDatos(sessionStorage);

                }})
            })


            botonPagar.addEventListener('click', (e) => {
                e.preventDefault();

                Swal.fire({
                    title: `<p> Revisa tus datos antes de confirmar el pago.</p>`,
                    html: `<li>Medio de pago: ${formaPago.value}</li> <li>Tarjeta: ${tarjeta.value}</li> <li>Numero de tarjeta: ${numTarjeta.value}</li> <li>Clave Tarjeta: ${clave.value}</li>`,
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: 'Confirma el pago?',
                    denyButtonText: `Don't save`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.value) {
                        Swal.fire('El pago se ha realizado!', '', 'success')
                        sessionStorage.setItem('formaPago', formaPago.value);
                        sessionStorage.setItem('tarjeta', tarjeta.value);
                        sessionStorage.setItem('numero tarjeta', numTarjeta.value);
                        sessionStorage.setItem('Clave tarjeta', clave.value);

                    } else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info')
                    }
                })
            })


          //  recupero los datos que decidio guardar el usuario en el Local.

           window.onload = ()=>{
            let usuarioEnStorage = JSON.parse(localStorage.getItem('usuario'));
            if(usuarioEnStorage){
                Swal.fire(`<p> Tenes los siguientes datos cargados: </p><li> Nombre: ${usuarioEnStorage.user} </li></p><li> Mail: ${usuarioEnStorage.mail} </li></p><li> Contraseña: ${usuarioEnStorage.pass} </li></p><li> Curso seleccionado: ${usuarioEnStorage.curso} </li>`,);
               
            }else{
                Swal.fire('No tenes datos de sesiones anteriores');
            }
          } 

          //Me falta volver a rellenar los campos del formulario con los datos de la sesion anterior...

          