const form = $("#form");
const boton = $("#boton");


const formValidation = () => {
    form.validate({
        rules: {
            email : {
            required: true,
            email: true,
            minlength: 5,
            normalizer: function( value ) {
               return $.trim( value );
             }
         },    
            password: {
            required: true,    
            minlength: 5
            }
        },
        messages: {           
            email: {
               required: "Por favor ingresa un correo válido",
               minlength: "Tu nombre debe ser de no menos de 5 caracteres"
            },
            password: {
               required: "Por favor ingresa una contraseña",
               minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
            }
         },
         errorElement: "em",
           errorPlacement: function (error, element) {
              // Add the `help-block` class to the error element
              error.addClass("help-block text");
              error.insertAfter(element);
           },
           highlight: function ( element, errorClass, validClass ) {
              $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
           },
           unhighlight: function (element, errorClass, validClass) {
              $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
           },
              
    })

}