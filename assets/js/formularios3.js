/*
 * Gestión de eventos y formularios en JavaScript
*/

/*
    Ejemplo de función anónima (sin nombre)
    1.- Ejecuta el código cuando la página se haya cargado completamente
    2.- al evento de click en el botón de id = 'enviar'
        ejecuta la función validarFormulario()
*/

window.onload = function() {
    $("#enviar").on("click", validarFormulario);
}

window.onload = function() {
    $("#cambiarcontrasinal").on("click", validarNuevoPass);
}


$(
    function() {
        // Expresión regular para aceptar sólo letras del alfabeto español

        const expresionRegular = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ\s]+$/;

        $.validator.addMethod('alfabeto', function(value, element) {
            return this.optional(element) || expresionRegular.test(value);
        })
    }
);

$(
    function() {
        // Expresión regular para aceptar teléfonos válidos
    
        const expresionRegular = /^[6-9]{1}[0-9]{8}$/;

        $.validator.addMethod('telefono', function(value, element) {
            return this.optional(element) || expresionRegular.test(value);
        })
    }
);

function validarNuevoPass() {
    $("#cambiarclave").validate({

    });

}

function validarFormulario () {
    $('#form').validate ({
        rules: {

            name: {
                required: true,
                alfabeto: true,
                maxLength: 50
            },

            email : {
                required: true,
                email: true
            },

            tfno: {
                telefono: true

            },

            edad: {
                required: true,
                digits: true,
                min: 18,
                max:120
            }
            ,
            mensaje: {
                required: true,
                minLength: 5,
                maxLength: 255


            }
        },
        messages: {
            name: {
                required: "El campo nombre es obligatorio",
                alfabeto: "El nombre sólo puede contener letras del alfabeto español y espacios en blanco",
                maxLength: "El campo nombre no puede exceder 50 caracteres"
            },

            email : {
                required: "El campo email es obligatorio",
                email: "Por favor, introduzca un correo electrónico válido"
            },

            tfno: {
                telefono: "Por favor, introduzca un teléfono válido"

            },

            edad: {
                required: "El campo edad es obligatorio",
                digits: "El campo edad solo debe contener números",
                min: "Tu edad no puede ser menor de 18 años",
                max: "Tu edad no puede superar los 120 años"
            },
            mensaje: {
                required: "El campo mensaje es obligatorio",
                minLength: "El mensaje debe tener al menos 5 caracteres",
                maxLength: "El mensaje no puede exceder los 255 caracteres"


            }
        }
    });
}