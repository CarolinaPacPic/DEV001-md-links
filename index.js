const fs = require('fs');
const path = require('path');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // identifica si la ruta existe.
  if (fs.existsSync(path)) {
    // si existe resolver la promesa
    resolve('si existe la ruta');

    // Chequear o convertir a una ruta absoluta
    // Probar si esa ruta absoluta es un archivo (o un directorio CREO Q NO)
    // (Si es un directorio filtrar los archivos md.(CREO Q NO VA))
    // Si es un archivo devuelve un arreglo
  } else {
  // si no existe la ruta se rechaza la promesa
    reject('La ruta no existe');
  }
});

module.exports = {
  mdLinks,
};
