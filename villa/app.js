var jsCanvas = document.getElementById("canvas");
var contextCanvas = jsCanvas.getContext("2d");
var img_mapa = "images/tile.png";
var img_vaca = 'images/vaca.png'
var x_aleatorio = aleatorio(0, 420);
var y_aleatorio = aleatorio(0, 420);

var fondo = new Image();
fondo.src = img_mapa;
fondo.addEventListener("load", dibujarFondo);

var vaca = new Image();
vaca.src = img_vaca;
vaca.addEventListener("load", dibujarElemento)


function dibujarElemento()
{
  contextCanvas.drawImage(vaca, x_aleatorio, y_aleatorio);
}

function dibujarFondo()
{
  contextCanvas.drawImage(fondo, 0, 0);
}


function aleatorio(min, max)
{
  var n;
  n = Math.floor(Math.random() * (max - min + 1)) + min;
  return n;
}