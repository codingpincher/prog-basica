var jsCanvas = document.getElementById("canvas");
var contextCanvas = jsCanvas.getContext("2d");

var vaca = {
  url: 'images/vaca.png',
  cargaOk: false
}
var pollo = {
  url: 'images/pollo.png',
  cargaOk: false
}
var cerdo = {
  url: 'images/cerdo.png',
  cargaOk: false
}
var fondo = {
  url: 'images/tile.png',
  cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVaca()
{
  vaca.cargaOk = true;
  dibujar();
}
function cargarCerdo()
{
  cerdo.cargaOk = true;
  dibujar();
}
function cargarPollo()
{
  pollo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOk)
  {
    contextCanvas.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk)
  {
    var x = aleatorio(0, 420)
    var y = aleatorio(0, 420)
    contextCanvas.drawImage(vaca.imagen, x, y);
  }
  if (cerdo.cargaOk)
  {
    var x = aleatorio(0, 420)
    var y = aleatorio(0, 420)
    contextCanvas.drawImage(cerdo.imagen, x, y);
  }
  if (pollo.cargaOk)
  {
    var x = aleatorio(0, 420)
    var y = aleatorio(0, 420)
    contextCanvas.drawImage(pollo.imagen, x, y);
  }
}


function aleatorio(min, max)
{
  var n;
  n = Math.floor(Math.random() * (max - min + 1)) + min;
  return n;
}