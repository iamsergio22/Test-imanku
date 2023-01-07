const form = $("#form2");

const formValidationData = () => {
  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });

$( "#form2" ).validate( {
    rules: {
      year: {
        required: true,
        minlength: 4,
        normalizer: function( value ) {
          return $.trim( value );
        }
      },
      Pparty: {
        required: true,
        normalizer: function( value ) {
          return $.trim( value );
        }
      },
      county: {
        required: true,
        normalizer: function( value ) {
          return $.trim( value );
        }
      },
      Vcount: {
        required: true,
        minlength: 1,
        normalizer: function( value ) {
          return $.trim( value );
        }
      },
    },
    messages: {           
        year: {
            required: "Por favor ingresa un año valido",
            minlength: "El año debe ser de no menos de 4 caracteres"
        },
    Pparty: {
            required: "Por favor selecciona un partido politico"
        },
    county: {
        required: "Por favor selecciona una ciudad valida"
        },
    Vcount: {
        required: "Por favor ingresa una cantidad de votos valida",
        minlength: "Minimo un caracter"
     },
  }, 
    submitHandler: function(form) {
      form.submit();
    }
  });
}






