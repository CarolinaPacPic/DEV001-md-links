const {
  pathExists,
  isAbsolutePath,
  convertAbsolutePath,
  isMarkdown,
} = require('./Api');

const mdLinks = (inputPath, options) => new Promise((resolve, reject) => {
  // si existe resolver la promesa
  // return reject('si existe la ruta');
  // }

  // identifica si la ruta existe.
  if (pathExists(inputPath)) {
    console.log('La ruta existe');
    // Chequear si es una ruta absoluta o relativa
    if (!isAbsolutePath(inputPath)) {
      console.log('Es una ruta RELATIVA');
      // Convertir a una ruta absoluta
      const pathAbsolute = convertAbsolutePath(inputPath);
      console.log(`La ruta relativa se convirtio a ABSOLUTA ${pathAbsolute}`);
      // Probar si esa ruta absoluta es un archivo (o un directorio CREO Q NO)
      // (Si es un directorio filtrar los archivos md.(CREO Q NO VA))
      // ver si es una archivo .md
      // Si es un archivo .md devuelve un arreglo
    }
  }
});

module.exports = {
  mdLinks,
};
