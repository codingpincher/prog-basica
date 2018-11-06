function aleatorio (min, max)
{
  var n;
  n = Math.floor(Math.random() * (max - min + 1)) + min;
  return n;
}

var z = aleatorio(10, 20)
document.write(z)