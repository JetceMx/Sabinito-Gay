let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './images/borre.png';

imgArray[1] = new Image();
imgArray[1].src = './images/caballio.png';

imgArray[2] = new Image();
imgArray[2].src = './images/cerdo.png';

imgArray[3] = new Image();
imgArray[3].src = './images/gallio.png';

imgArray[4] = new Image();
imgArray[4].src = './images/pato.png';

imgArray[5] = new Image();
imgArray[5].src = './images/vaca.png';

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
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
 var newimg= document.createElement('img id="an1"'); 
img1=imgArray[0]
// Agrega la imagen al documento 
document.body.appendChild(img1);

document.createElement('img'); 
img2=imgArray[1]
// Agrega la imagen al documento 
document.body.appendChild(img2);

document.createElement('img'); 
img3=imgArray[2]
// Agrega la imagen al documento 
document.body.appendChild(img3);

document.createElement('img'); 
img4=imgArray[3]
// Agrega la imagen al documento 
document.body.appendChild(img4);

document.createElement('img'); 
img5=imgArray[4]
// Agrega la imagen al documento 
document.body.appendChild(img5);

document.createElement('img'); 
img6=imgArray[5]
// Agrega la imagen al documento 
document.body.appendChild(img6);



function iniciar(){
    var imagenes =document.querySelectorAll('#cajaimagenes > img');
    for (var i = 0 ;i < imagenes.length ;i++){
        imagenes[i].addEventListener('dragstart',arrastrado,false)
        imagenes[i].addEventListener('dragend',finalizado,false)
    }
    soltar = document.getElementById('lienzo')
    lienzo =soltar.getContext('2d')
    soltar.addEventListener('dragenter',eventoEnter,false)
    soltar.addEventListener('dragover',eventoOver,false)
    soltar.addEventListener('drop',soltado,false)
}

function eventoEnter(e){
    console.log("Soy el evento dragenter");
    e.preventDefault()
}

function eventoOver(e){
    console.log("Soy el evento dragover");
    e.preventDefault()
}

function finalizado(e){
    elemento = e.target
    elemento.style.visibility='hidden'
}

function arrastrado(e){
    elemento = e.target
    e.dataTransfer.setData('Text',elemento.getAttribute('id'))
    e.dataTransfer.setDragImage(e.target,0,0)
}

function soltado(e){
    e.preventDefault()
    var id = e.dataTransfer.getData('Text')
    var elemento= document.getElementById(id)
    var posx = e.pageX - soltar.offsetLeft
    var posy = e.pageY - soltar.offsetTop
    lienzo.drawImage(elemento,posx,posy)
}

window.addEventListener('load',iniciar,false)