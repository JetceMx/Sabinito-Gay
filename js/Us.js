

function validar() {
    //obteniendo el valor que se puso en campo text del formulario
    Texto = document.getElementById("Nom").value;
    //la condición
    if (Texto.length == 0) {
        alert("El usuario no puede estar vacio");
        return false;
    }
    return true;
}


function guardarDatos() {
    localStorage.Nom = document.getElementById("Nom").value;
    
}

