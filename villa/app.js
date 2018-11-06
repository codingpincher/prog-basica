for(var i = 0; i < 10; i++)
{
  var z;
  z = aleatorio(10, 20);
  document.write(z + ', ');
}

function aleatorio (min, max)
{
  var n;
  n = Math.floor(Math.random() * (max - min + 1)) + min;
  return n;
}