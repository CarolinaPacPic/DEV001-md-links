const {
  pathExists,
  isAbsolutePath,
  isMarkdown,
} = require('./Api');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // identifica si la ruta existe.
  if (pathExists(path)) {
    // si existe resolver la promesa
    return reject('si existe la ruta');
  }
  // si no existe la ruta se rechaza la promesa
  reject('La ruta no existe');

  /// ///// otras pruebas /////////
  path = isAbsolutePath(path);
  if (!pathExist(path)) {
    // resultado false
    return reject('La ruta no existe');
  }
  // ver si no es una archivo .md
  if (!isMarkdown(path)) {
    console.log('archivo md');
    return reject(`${path} La ruta es un archivo md`);
  }
  return resolve([]);
});
// Chequear o convertir a una ruta absoluta

// Probar si esa ruta absoluta es un archivo (o un directorio CREO Q NO)
// (Si es un directorio filtrar los archivos md.(CREO Q NO VA))
// Si es un archivo devuelve un arreglo

module.exports = {
  mdLinks,
};
