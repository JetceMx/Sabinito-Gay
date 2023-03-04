

const firstName = document.querySelector("#input");
const a = document.querySelector("#a");

a.addEventListener("click",()=>{
    if(firstName.value.length == 0){
        alert("El usuario no puede estar vacio");
    }else{
        alert("Hola" + firstName.value);
    }
});




function guardarDatos() {
    localStorage.Nom = document.getElementById("Nom").value;
    
}

