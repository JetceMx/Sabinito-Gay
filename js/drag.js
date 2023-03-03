//fondo canvas
var imgArray1=new Array();
imgArray1[0] = new Image();
imgArray1[0].src = './images/nborre.png';
imgArray1[0].id = 'imagen_01';


imgArray1[1] = new Image();
imgArray1[1].src = './images/ncaballio.png';
imgArray1[1].id = 'imagen_02';

imgArray1[2] = new Image();
imgArray1[2].src = './images/ncerdo.png';
imgArray1[2].id = 'imagen_03';

imgArray1[3] = new Image();
imgArray1[3].src = './images/ngallio.png';
imgArray1[3].id = 'imagen_04';

imgArray1[4] = new Image();
imgArray1[4].src = './images/npato.png';
imgArray1[4].id = 'imagen_05';

imgArray1[5] = new Image();
imgArray1[5].src = './images/nvaca.png';
imgArray1[5].id = 'imagen_06';

shuffle(imgArray1);

//var intro = document.getElementById('lienzo_0');
//intro.style.backgroundImage = "url("+imgArray1[0]+")";


//nombres imgs
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
img1 = imgArray1[0];
console.log(img1);
// Agrega la imagen al documento 
const ele1=document.getElementById("cajaimagenes")
const ch1=document.getElementById("imagen_1")
ele1.appendChild(img1,ch1);
img1.style.width = "80px";
img1.style.height="20px"

document.createElement('img');
var img2 = imgArray1[1]
// Agrega la imagen al documento 
const ele2=document.getElementById("cajaimagenes")
const ch2=document.getElementById("imagen_1")
ele2.appendChild(img2,ch2);
img2.style.width = "80px";
img2.style.height="20px"


document.createElement('img');
img3 = imgArray1[2]
// Agrega la imagen al documento 
const ele3=document.getElementById("cajaimagenes")
const ch3=document.getElementById("imagen_1")
ele3.appendChild(img3,ch3);
img3.style.width = "80px";
img3.style.height="20px"


document.createElement('img');
img4 = imgArray1[3]
// Agrega la imagen al documento 
const ele4=document.getElementById("cajaimagenes")
const ch4=document.getElementById("imagen_1")
ele4.appendChild(img4,ch4);
img4.style.width = "70px";
img4.style.height="20px"


document.createElement('img');
img5 = imgArray1[4]
// Agrega la imagen al documento 
const ele5=document.getElementById("cajaimagenes")
const ch5=document.getElementById("imagen_1")
ele5.appendChild(img5,ch5);
img5.style.width = "70px";
img5.style.height="20px"


document.createElement('img');
img6 = imgArray1[5]
// Agrega la imagen al documento 
const ele6=document.getElementById("cajaimagenes")
const ch6=document.getElementById("imagen_1")
ele6.appendChild(img6,ch6);
img6.style.width = "80px";
img6.style.height="20px"


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
       
        lienzo.drawImage(fondo, 10, 10,130,100);
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
    console.log(elemento)
    lienzo = e.target.getContext('2d');
    lienzo.drawImage(elemento, posx, posy,100,20);
}

window.addEventListener('load', iniciar, false)