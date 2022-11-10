//esta app pretende informar al usuario sobre las caracteristicas del curso seleccionado antes de pagar la inscripción y ademas guardar sus datos para poder contactarlo una vez haya abonado la matricula.


//clase constructora con los datos de los cursos.
class Curso {
    constructor(idioma, duracion, turno, valor, id) {
        this.idioma = idioma;
        this.duracion = parseInt(duracion);
        this.turno = turno;
        this.valor = parseInt(valor);
        this.id = id;
        this.vendido = false;
    }

    //El length me va a contar los elementos del array y devuelve un numero que me sirve para el nro de item del nuevo curso que se ingrese.
    asignarId(array) {
        this.id = array.length;
    }

}

//array de cursos con sus valores.
const cursos = [
    new Curso('ingles', '9', 'mañana', 25000, 1),
    new Curso('frances', '6', 'mañana', 32000, 2),
    new Curso('italiano', '12', 'tarde', 45000, 3),
    new Curso('chino', '23', 'noche', 62000, 4),
    new Curso('aleman', '10', 'noche', 34000, 5),
    new Curso('portugues', '15', 'tarde', 27000, 6)
]


//traigo los elementos que voy a usar del DOM

const nombreUsuario = document.getElementById('fullName'),
    mail = document.getElementById('mail'),
    password = document.getElementById('pass'),
    radiosCursos = document.querySelectorAll("div.curso input[type='radio']"),
    radiosTurnos = document.querySelectorAll("div.turno input[type='radio']"),
    moneda = document.getElementById('moneda'),
    cuotas = document.getElementById('cuotas'),
    añoTarjeta = document.getElementById('añoTarjeta'),
    botonAbrirAlert = document.getElementById('botonInfo'),
    botonConsultaPago = document.getElementById('consultaPago'),
    textoResultado = document.getElementById('respuestaResultado'),
    botonPago = document.getElementById('botonPago'),
    botonAdm = document.getElementById('adm');


//Eventos para hacer clic sobre los radios y que busque los radios seleccionados.

radiosCursos.forEach(item => {
    item.addEventListener('click', () => {
        let radioSeleccionado = item.value;

        cursoEncontrado = cursos.find(curso => curso.idioma == radioSeleccionado);

    })
})

let cursoEncontrado;



radiosTurnos.forEach(item => {
    item.addEventListener('click', () => {
        turnoSeleccionado = item.value;
    })
})

let turnoSeleccionado;


//funcion para guardar los datos ingresados y radios seleccionados en el storage
function guardarDatos(storage) {

    let user = document.getElementById('fullName').value;
    let mail = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    let curso = document.getElementById(cursoEncontrado.idioma);
    let turno = document.getElementById(turnoSeleccionado);

    const usuario = {
        'user': user,
        'mail': mail,
        'pass': pass,
        'curso': cursoEncontrado.idioma,
        'turno': turnoSeleccionado,

    }

    storage.setItem('usuario', JSON.stringify(usuario));
}


//boton para mostrar al usuario los datos que ingresó mas la duración y valor del curso. Tambien le advierte si el curso elegido no se puede cursar en ese turno y le consulta si quiere guardar los datos.
botonAbrirAlert.addEventListener('click', (e) => {
    e.preventDefault();

    if (!nombreUsuario.value || !mail.value || !password.value || !cursoEncontrado || !turnoSeleccionado) {
        Swal.fire('Completá todos los campos!');
    } else if (cursoEncontrado.turno != turnoSeleccionado) {
        Swal.fire(`el curso ${cursoEncontrado.idioma} no se puede cursar en turno ${turnoSeleccionado}`);

        for (e = 0; e < radiosTurnos.length; e++) {
            radiosTurnos[e].checked = false;
        }

    } else {

        Swal.fire({
            title: `<p> Hola ${nombreUsuario.value}! Revisa tus datos antes de continuar.</p>`,
            html: `<li>Tu nombre completo: ${nombreUsuario.value}</li> <li>Tu mail: ${mail.value}</li> <li>Elegiste el curso: ${cursoEncontrado.idioma}</li><li>Duracion: ${cursoEncontrado.duracion} meses</li><li>Valor total: $${cursoEncontrado.valor} + IVA</li>`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Guardar y continuar',
            denyButtonText: 'Continuar sin guardar',
        }).then((result) => {
            result.value ? Swal.fire('Datos guardados!', '', 'success') && guardarDatos(localStorage) : Swal.fire('Tus datos no fueron guardados', '', 'info') && guardarDatos(sessionStorage);
        })
    }
})


//Funcion para obtener las tasas de cambio segun la moneda. Traigo de una API las tasas de cambio de las divisas que voy a ofrecer.

let APIKEY = 'fb9fca8502183f50c4b54942';

function obtenerTasaCambio() {

    textoResultado.innerText = 'Obteniendo informacion...';

    const URL = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/ARS`;

    fetch(URL)
        .then((response) => response.json())
        .then(result => {
            console.log(result);
            let tasaConversion = result.conversion_rates[moneda.value];
            let resultado = (((cursoEncontrado.valor * 1.21) * tasaConversion) / (cuotas.value)).toFixed(2);

            textoResultado.innerText = `Vas a pagar: ${cuotas.value} cuota/s de: ${moneda.value}${resultado} IVA incl.`;

        })
        .catch(() => {
            textoResultado.innerText = 'Algo salió mal, vuelve a intentarlo mas tarde.';
        });

}


//Boton para que en funcion a la divisa y cant de cuotas elegida muestra el valor del curso.
botonConsultaPago.addEventListener('click', (e) => {
    e.preventDefault();

    if (!nombreUsuario.value || !mail.value || !password.value || !cursoEncontrado || !turnoSeleccionado || !moneda.value || !cuotas.value) {
        Swal.fire('Debes completar todos los campos!');
    } else if (moneda.value === 'moneda' || cuotas.value === 'Cantidad de cuotas') {
        swal.fire('Debes completar todos los campos')
    } else {
        obtenerTasaCambio();
        textoResultado.innerText;

    }
})


//Boton para confirmar el pago que abre una ventana para realizar el pago de la inscripción mediante mercadoPago.
botonPago.addEventListener('click', (e) => {
    e.preventDefault();

    Swal.fire({
        position: 'top-end',
        icon: '',
        title: 'Te redireccionaremos a Mercadopago para que puedas abonar la inscripción al curso que seleccionaste. Una vez abonado debes enviar el comprobante de pago a cursos@inscripciones.com y aguardar el mail con la clave para ingresar al curso.',
        showConfirmButton: false,
        timer: 6000
    })

    setInterval(abrirPago, 7000);

    function abrirPago() {
        window.open('https://mpago.la/1dXi6bG', '_blank')
    };

})

//  Recupero los datos que decidio guardar el usuario en el LocalStorage.

window.onload = () => {
    let usuarioEnStorage = JSON.parse(localStorage.getItem('usuario'));

    usuarioEnStorage ? (nombreUsuario.value = usuarioEnStorage.user) && (mail.value = usuarioEnStorage.mail) && (password.value = usuarioEnStorage.pass) : Swal.fire('No tenes datos de sesiones anteriores');
}


//boton para que un administrador pueda ingresar otro curso. Este comando es solo a modo de mostrar la funcion. 
botonAdm.addEventListener('click', (e) => {
    e.preventDefault();

    let login = prompt('Si sos administrador ingresá la contraseña.');
    if (login != 'Admin@1234') {
        alert('Ingresa una contraseña correcta')
    } else {

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
        }
    }

})