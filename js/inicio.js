var img = new Image();
img.src = "images/Granja.jpg";

var img2 = new Image();
img2.src = "images/Logo.png";

var img3 = new Image();
img3.src = "images/Start.png";

window.onload = function(){
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img2, 460,70,400,400);
    ctx.drawImage(img3,600,450,150,150);
}
