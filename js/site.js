// Funcion que captura datos

function captura(){
    let nombreUs = document.getElementById("nameus").value;
    let apellidoUs = document.getElementById("surname").value;
    let mailUs = document.getElementById("email").value;
    let mensajeUs = document.getElementById("msj").value;
    
    if (nombreUs == ""){
        alert("Es obligatorio completar todos los campos");
        document.getElementById("nameus").focus();
    }else if (apellidoUs == ""){
        alert("Es obligatorio completar todos los campos");
        document.getElementById("surname").focus();
    }else if (mailUs == ""){
        alert("Es obligatorio completar todos los campos");
        document.getElementById("email").focus();
    }else if (mensajeUs == ""){
        alert("Es obligatorio completar todos los campos");
        document.getElementById("msj").focus();
    }else{
        console.log(nombreUs + " " + apellidoUs + "\n" + mailUs + "\n" + mensajeUs);
        document.getElementById("nameus").value="";
        document.getElementById("surname").value="";
        document.getElementById("email").value="";
        document.getElementById("msj").value="";
        alert("Gracias por su consulta");
        document.getElementById("nameus").focus();
    }

}
