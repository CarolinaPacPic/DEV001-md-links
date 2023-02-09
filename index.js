const {
  pathExists,
  isAbsolutePath,
  convertAbsolutePath,
  isItFile,
  isMarkdown,
  readFile,
  findLinks,
} = require('./Api');

const mdLinks = (inputPath, options) => new Promise((resolve, reject) => {
  // identifica si la ruta existe.
  if (pathExists(inputPath)) {
    console.log('La ruta existe');
    // Chequear si es una ruta absoluta o relativa
    if (!isAbsolutePath(inputPath)) {
      console.log('Es una ruta RELATIVA');
      // Convertir a una ruta absoluta
      const pathAbsolute = convertAbsolutePath(inputPath);
      console.log(`La ruta relativa se convirtio a ABSOLUTA ${pathAbsolute}`);
      // Probar si esa ruta absoluta es un archivo
      if (isItFile(inputPath)) {
        console.log('Es un archivo');
        // (Si es un directorio filtrar los archivos md.(CREO Q NO VA))
        // ver si es una archivo .md
        if (isMarkdown(inputPath)) {
          console.log('Es un archivo markdown');
          const content = readFile(inputPath);
          if (content !== '') {
            const arrayLinks = findLinks(content, inputPath);
            // si encuentra archivos md, crear un arreglo de mds
            // console.log(arrayLinks);
            arrayLinks.forEach((linkes) => console.log(linkes));
          }
        }
      }
    }
  }
});
  // Si es un archivo .md devuelve un arreglo

module.exports = {
  mdLinks,
};
