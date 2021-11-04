

function validarFormulario(){
    console.log("ENVIANDO FORMULARIO....")

    /*Expresión regular validación email */ 

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    /*validación campos vacios*/ 

    if(document.getElementById("nombre").value.length==0 || document.getElementById("apellido").value.length==0 || 
    document.getElementById("email").value.length==0 || document.getElementById("telefono").value.length==0 || 
    document.getElementById("password1").value.length==0 || document.getElementById("password2").value.length==0){
        alert("todos los campos deben estar completos");
        return false;
    }

    /*validación telefono */ 

    else if( document.getElementById("telefono").value.length <= 9){
        alert("Telefono mal ingresado");
        return false;
    }

    /*validación email */ 
    
    else if(emailRegex.test(document.getElementById("email").value)){ /* otra forma de validar es cambiar en el html "type = email"*/
        alert("email aceptado");
    }else{
        alert("el email es incorrecto");
        return false;
    }

    /*validación passwords iguales*/ 

    if(document.getElementById("password1").value != document.getElementById("password2").value){
        alert("las contraseñas no son iguales");
        return false;
    }

    document.forms.submit();
}

