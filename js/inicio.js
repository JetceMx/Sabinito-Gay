var img = new Image();
img.src = "images/Granja.jpg";

var img2 = new Image();
img2.src = "images/Logo.png";


window.onload = function(){
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img2, 470,70,400,400);
}

'use strict'
class CanvasButton{
  constructor(canvas,x,y,width,height,text,color,clickable){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.rect = this.canvas.getBoundingClientRect();
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.text=text;
    this.color = color;
    this.clickable = clickable;
    this.clickHandler;
    if (this.clickable){
      this.makeClickable();
    }
  }
  makeClickable(){
    console.log('made clickable')
    this.clickable = true;
    this.clickHandler = this.clicker.bind(this)
    canvas.addEventListener('click', this.clickHandler,true);
  }

  makeUnclickable(){
    console.log('made UNclickable')
    this.clickable = false;
    canvas.removeEventListener('click', this.clickHandler,true);
  }

  clicker(evt) {
    if (evt.pageX-this.rect.left>=this.x && evt.pageX-this.rect.left<=this.x+this.width && evt.pageY-this.rect.top>=this.y && evt.pageY-this.rect.top<=this.y+this.height){
        window.open("index.html");
    }
  }
  yes(){
    this.ctx.lineWidth = 1;
  }
  no(){
    this.ctx.lineWidth = 3;
  }
  draw(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = 'black';
    this.ctx.font = "30px Verdana";
    this.ctx.fillText(this.text, this.x, this.y + this.height);
    this.clickable ? this.yes() : this.no();
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x+this.width, this.y);
    this.ctx.lineTo(this.x+this.width, this.y+this.height);
    this.ctx.lineTo(this.x, this.y+this.height);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
  }
}
//PINTAR BOTONESS OK
'use strict'
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect=canvas.getBoundingClientRect();

var CButtons=[];
CButtons[0] = new CanvasButton(canvas,630,470,100,25,'JUGAR','white',true);



for (let i=0; i<CButtons.length; i++){
  let ButtonName = 'B'+ (i+1);
  document.getElementById(ButtonName).addEventListener('click',(evt)=> {
    let buttonNr = parseInt(evt.target.id.slice(1,evt.target.length))-1;
    CButtons[buttonNr].clickable ? CButtons[buttonNr].makeUnclickable() : CButtons[buttonNr].makeClickable();
  })
}
//solo se regresa a blanco 
function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //ctx.fillStyle='lightgrey';//fondo x
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(img, 0, 0);
    ctx.drawImage(img2, 470,70,400,400);

  for (let CButton of CButtons){
    CButton.draw();
  }
requestAnimationFrame(loop);
}
loop();