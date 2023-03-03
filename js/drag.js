var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './images/borre.png';
imgArray[0].id = 'imagen_1';

imgArray[1] = new Image();
imgArray[1].src = './images/caballio.png';
imgArray[1].id = 'imagen_1';

imgArray[2] = new Image();
imgArray[2].src = './images/cerdo.png';
imgArray[2].id = 'imagen_1';

imgArray[3] = new Image();
imgArray[3].src = './images/gallio.png';
imgArray[3].id = 'imagen_1';

imgArray[4] = new Image();
imgArray[4].src = './images/pato.png';
imgArray[4].id = 'imagen_1';

imgArray[5] = new Image();
imgArray[5].src = './images/vaca.png';
imgArray[5].id = 'imagen_1';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

shuffle(imgArray);



// Crea un nuevo elemento de imagen 
//var newimg = document.createElement('img');

var img1 = new Image();
img1 = imgArray[0];
console.log(img1);
// Agrega la imagen al documento 
const ele=document.getElementById("cajaimagenes")
const ch=document.getElementById("imagen_1")
ele.appendChild(img1,ch);


document.createElement('img');
var img2 = imgArray[1]
// Agrega la imagen al documento 

document.createElement('img');
img3 = imgArray[2]
// Agrega la imagen al documento 


document.createElement('img');
img4 = imgArray[3]
// Agrega la imagen al documento 

document.createElement('img');
img5 = imgArray[4]
// Agrega la imagen al documento 


document.createElement('img');
img6 = imgArray[5]
// Agrega la imagen al documento 
// document.body.appendChild(img6);

function iniciar() {
    var fondo = new Image();
    var imagenes = document.querySelectorAll('#cajaimagenes > img');
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrado, false)
        imagenes[i].addEventListener('dragend', finalizado, false)
    }

    for (let i = 0; i < 6; i++) {
        soltarChido = document.getElementById('lienzo_' + i);
        lienzo = soltarChido.getContext('2d');
        fondo.src = imgArray[i].src;
       
        lienzo.drawImage(fondo, 10, 10);
        soltarChido.addEventListener('dragenter', eventoEnter, false);
        soltarChido.addEventListener('dragover', eventoOver, false);
        soltarChido.addEventListener('drop', soltado, false);
    }
}

function eventoEnter(e) {
    console.log("Soy el evento dragenter");
    e.preventDefault()
}

function eventoOver(e) {
    console.log("Soy el evento dragover");
    e.preventDefault()
}

function finalizado(e) {
    console.log("Soy el evento de finalizado");
    elemento = e.target
    elemento.style.visibility = 'hidden'
}

function arrastrado(e) {
    console.log("Soy el evento de arrastrado");
    elemento = e.target
    e.dataTransfer.setData('Text', elemento.getAttribute('id'))
    e.dataTransfer.setDragImage(e.target, 0, 0)
}

function soltado(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    var elemento = document.getElementById(id);
    console.log(id);
    var posx = e.pageX - e.target.offsetLeft;
    var posy = e.pageY - e.target.offsetTop;
    lienzo = e.target.getContext('2d');
    lienzo.drawImage(elemento, posx, posy);
}

window.addEventListener('load', iniciar, false)