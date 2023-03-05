//fondo canvas
var canvasArray = new Array();
canvasArray[0] = new Image();
canvasArray[0].src = './images/nborre.png';
canvasArray[0].id = 'borrego';

canvasArray[1] = new Image();
canvasArray[1].src = './images/ncaballio.png';
canvasArray[1].id = 'juan';

canvasArray[2] = new Image();
canvasArray[2].src = './images/ncerdo.png';
canvasArray[2].id = 'cerdo';

canvasArray[3] = new Image();
canvasArray[3].src = './images/ngallio.png';
canvasArray[3].id = 'gallo';

canvasArray[4] = new Image();
canvasArray[4].src = './images/npato.png';
canvasArray[4].id = 'pato';

canvasArray[5] = new Image();
canvasArray[5].src = './images/nvaca.png';
canvasArray[5].id = 'vaca';

shuffle(canvasArray);

var sonidoError = new Audio();
sonidoError.src = "./audios/Error.mp3";
var animal = new Audio();
var musicaFondo = new Audio('./audios/fondoJuego.mp3');

//nombres imgs
var nombresArray = new Array();
nombresArray[0] = new Image();
nombresArray[0].src = './images/borre.png';
nombresArray[0].id = 'borrego';

nombresArray[1] = new Image();
nombresArray[1].src = './images/caballio.png';
nombresArray[1].id = 'juan';

nombresArray[2] = new Image();
nombresArray[2].src = './images/cerdo.png';
nombresArray[2].id = 'cerdo';

nombresArray[3] = new Image();
nombresArray[3].src = './images/gallio.png';
nombresArray[3].id = 'gallo';

nombresArray[4] = new Image();
nombresArray[4].src = './images/pato.png';
nombresArray[4].id = 'pato';

nombresArray[5] = new Image();
nombresArray[5].src = './images/vaca.png';
nombresArray[5].id = 'vaca';

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

shuffle(nombresArray);

// Crea un nuevo elemento de imagen 
//var newimg = document.createElement('img');

var img1 = new Image();
img1 = canvasArray[0];
// Agrega la imagen al documento 
const ele1 = document.getElementById("cajaimagenes")
const ch1 = document.getElementById("imagen_1")
ele1.appendChild(img1, ch1);
img1.style.width = "100px";
img1.style.height = "35px"
img1.style.padding = "10px";

document.createElement('img');
var img2 = canvasArray[1]
// Agrega la imagen al documento 
const ele2 = document.getElementById("cajaimagenes")
const ch2 = document.getElementById("imagen_1")
ele2.appendChild(img2, ch2);
img2.style.width = "100px";
img2.style.height = "35px"
img2.style.padding = "10px";

document.createElement('img');
img3 = canvasArray[2]
// Agrega la imagen al documento 
const ele3 = document.getElementById("cajaimagenes")
const ch3 = document.getElementById("imagen_1")
ele3.appendChild(img3, ch3);
img3.style.width = "100px";
img3.style.height = "35px"
img3.style.padding = "10px";

document.createElement('img');
img4 = canvasArray[3]
// Agrega la imagen al documento 
const ele4 = document.getElementById("cajaimagenes")
const ch4 = document.getElementById("imagen_1")
ele4.appendChild(img4, ch4);
img4.style.width = "100px";
img4.style.height = "35px"
img4.style.padding = "10px";

document.createElement('img');
img5 = canvasArray[4]
// Agrega la imagen al documento 
const ele5 = document.getElementById("cajaimagenes")
const ch5 = document.getElementById("imagen_1")
ele5.appendChild(img5, ch5);
img5.style.width = "100px";
img5.style.height = "35px"
img5.style.padding = "10px";

document.createElement('img');
img6 = canvasArray[5]
// Agrega la imagen al documento 
const ele6 = document.getElementById("cajaimagenes")
const ch6 = document.getElementById("imagen_1")
ele6.appendChild(img6, ch6);
img6.style.width = "100px";
img6.style.height = "35px"
img6.style.padding = "10px";

function musicaReproducir() {
    musicaFondo.play();
}

function musicaPausar() {
    musicaFondo.pause();
}

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
        fondo.src = nombresArray[i].src;
        lienzo.canvas.className = nombresArray[i].id;
        // console.log(lienzo.canvas.className);
        lienzo.drawImage(fondo, 30, 0, 130, 100);
        soltarChido.addEventListener('dragenter', eventoEnter, false);
        soltarChido.addEventListener('dragover', eventoOver, false);
        soltarChido.addEventListener('drop', soltado, false);
    }
}

function eventoEnter(e) {

    e.preventDefault()
}

function eventoOver(e) {

    e.preventDefault()
}

function finalizado(e) {
    console.log("Soy el evento de finalizado");
    elemento = e.target
    e.target.style.opacity = ''; // Pone la opacidad del elemento a 1 	
}

function arrastrado(e) {
    console.log("Soy el evento de arrastrado");
    elemento = e.target
    e.dataTransfer.effecAllowed = 'move';
    e.dataTransfer.setData('Text', elemento.getAttribute('id'))
    e.dataTransfer.setDragImage(e.target, 0, 0)
    e.target.style.opacity = '0.4';
}

var conta = 0;
var conta2 = 0;
function soltado(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    var elemento = document.getElementById(id);
    var posx = e.pageX - e.target.offsetLeft;
    var posy = e.pageY - e.target.offsetTop;

    if (elemento.id == e.target.className) {
        animal.src = "./audios/" + elemento.id + ".mp3";
        animal.play();
        lienzo = e.target.getContext('2d');
        lienzo.drawImage(elemento, posx, posy, 100, 20);
        elemento.style.visibility = 'hidden'
        conta += 100;
        document.getElementById("conta").innerHTML = "PUNTAJE:" + conta;
        conta2 += 1;
        if (conta2 == 6) {
            cronometrar = false;
            console.log(acumulado / 1000);
            window.open("ganar.html","_self")


        }
    } else {
        sonidoError.play();
        e.target.style.opacity = '1';
        conta -= 50;
        document.getElementById("puntos").innerHTML = conta;
    }

}

/* Contador */

let tiempoRef = Date.now();
let cronometrar = true;
let acumulado = 0;

setInterval(() => {
    let tiempo = document.getElementById("tiempo");
    if (cronometrar) {
        acumulado += Date.now() - tiempoRef;
    }
    tiempoRef = Date.now();
    tiempo.innerHTML = formatearMs(acumulado);
}, 1000 / 60);

function formatearMs(tiempo_ms) {
    let MS = tiempo_ms % 1000;
    let St = Math.floor(((tiempo_ms - MS) / 1000));
    let S = St % 60;
    let M = Math.floor((St / 60) % 60);
    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0);
    }
    return M.ceros(2) + ":" + S.ceros(2);
}

function Salir(){
    if(confirm("Estas seguro que Deseas salir ?")){
        alert("Has salido Exitosamente :D");
        window.open("Inicio.html","_self")

    }
}

window.addEventListener('load', iniciar, false)