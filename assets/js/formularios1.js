/*
 * Gestión de eventos y formularios en JavaScript
 */

/*
    Función anónima
    1.- Ejecuta el código cuando la página se haya cargado completamente
    2.- al evento de click en el botón de id = 'enviar'
        ejecuta la función validarFormulario()
*/

window.onload = function() {

    // Se crea un objeto HTML Document

    var enviar = document.getElementById("enviar");

    /*
        addEventListener()
        Sintáxis:
        addEventListener( evento-a-escuchar, función-a-lanzar, booleano )
        Permanece a la escucha de un evento y cuando se activa ejecuta la función
    */

    // El método addEventListener asigna las funciones a los tipos de evento
    // Evento onclick, tipo click, sobre el objeto element HTML
    // con id 'enviar'
    // Llama a la función validarFormulario()
        // que se encarga de validar el formulario
    // Se programa en la fase de burbuja (false),
        // es decir, del elemento más específico hacia afuera

    enviar.addEventListener('click', validarFormulario, false);

}


// Crear una función "validarFormulario" que se ejecute al pulsar el botón enviar

/*
    Función validarFormulario()
    Realiza las validaciones de los campos de formulario
*/

function validarFormulario() {

    // Declaración de variables
    var valido = true;
    var expRegNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,50}$/;
    var expRegEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    // Indica que el primer nº debe ser 6,7,8 ó 9 y que los 8 siguientes entre el 0 y el 9
    var expRegTfno = /^[6-9]{1}[0-9]{8}$/;

    // Objetos document HTML
    var formulario = document.getElementById("form")
    var nombre = document.getElementById("name");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");
    var edad = document.getElementById("edad");
    var tfno = document.getElementById("tfno");

    // Validar con JavaScript que el campo “nombre” no esté vacío

    if (nombre.value == "") {
        // Si está vacío se mostrará el mensaje “El campo ‘nombre’ es obligatorio”
        alert("El campo 'nombre' es obligatorio");
        // y se pondrá el foco en el campo “nombre”
        nombre.focus();
        valido = false;
    }

    // Validar con JavaScript que el campo “email” no esté vacío

    else if (email.value == "") {
        // Si está vacío se mostrará el mensaje “El campo ‘email’ es obligatorio”
        alert("El campo 'email' es obligatorio");
        // y se pondrá el foco en el campo “email”
        email.focus();
        valido = false;
    }

    // Validar con JavaScript que el campo “nombre” sólo acepte caracteres de letras y espacios en blanco.

    else if (!expRegNombre.exec(nombre.value)) {
        // Si no es válido mostrará el mensaje “El campo nombre sólo acepta letras y espacios en blanco”
        alert("El campo nombre sólo acepta letras y espacios en blanco ");
        // y se pondrá el foco en el campo “nombre”
        nombre.focus();
        valido = false;
    }

    // Validar con JavaScript que el campo “mail” cumpla el patrón declarado

    else if (!expRegEmail.exec(email.value)) {
        // Si no es válido mostrará el mensaje “El campo email sólo acepta letras, números, @...”
        alert("El campo email sólo acepta letras, números, los símbolos _ . -  y precisa una @ ");
        // y se pondrá el foco en el campo “email”
        email.focus();
        valido = false;
    }

    else if (mensaje.length>255) {
        alert("El testo ha excedido el límite de 255 caracteres");
        mensaje.focus();
        valido = false;
    }

    // Edad menor de 18 o edad mayor que 120 no se admite
    else if (edad.value <18 || edad.value >120) {
        alert("La edad debe estar comprendida entre 18 y 120 años");
        edad.focus();
        valido.false;

    }

    else if(!expRegTfno.exec(tfno.value)){
        alert("El número de teléfono no es válido")
        edad.focus();
        valido.false;

    }
    

    // Si todos los campos son válidos
    // se mostrará el mensaje “Formulario enviado”.
    if (valido == true) {
        alert("Formulario enviado");
        formulario.submit();
    }
}