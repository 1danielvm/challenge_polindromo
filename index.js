setTimeout(() => {
  var dato = prompt("Descubre si tu palabra o frase es  polindroma o no")
  var valor = dato;

function operationPilindromo() {
  function getCleanedString(clave) {
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
    for (var i = 0; i < specialChars.length; i++) {
      clave = clave.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }
    clave = clave.toLowerCase();
    clave = clave.replace(/ /g, "");
    clave = clave.replace(/á/gi, "a");
    clave = clave.replace(/é/gi, "e");
    clave = clave.replace(/í/gi, "i");
    clave = clave.replace(/ó/gi, "o");
    clave = clave.replace(/ú/gi, "u");
    return clave;
  }

  let filter1 = getCleanedString(valor);

  function stringInvertido() {
    let filter2 = getCleanedString(valor)
    return filter2.split('').reverse().join('');
  }

  let compare = stringInvertido();
  if (filter1 === compare) {
    alert ("🎉 La palabra o frase que pusiste si es un políndromo 🎉")
  } else {
    alert  ("Lo siento, no es un polindromo 😢")
  }
  
}

operationPilindromo();


}, 1000);
