const fs = require('fs');
const path = require('path');
// Funcion saber si existe una ruta
const pathExists = (inputPath) => fs.existsSync(path);

// Funcion identificar una ruta absoluta
const isAbsolutePath = (inputPath) => path.isAbsolute(inputPath);
// prueba
console.log(isAbsolutePath('/caro/caro/Desktop/Laboratoria/DEV001-md-links/NONES/prueba.md'));

// Funcion convertir a absoluta
const convertAbsolutePath = (inputPath) => (isAbsolutePath(inputPath) ? inputPath
  : path.resolve(inputPath));
  // prueba
 console.log(convertAbsolutePath('prueba/pruebita.md'));

// Identificar si es un archivo o directorio.(solo archivo)

// Identificar si tiene formato md.
const isMarkdown = (inputPath) => path.extname(inputPath) === '.md';
// Leer cada archivo del arreglo.

module.exports = {
  pathExists,
  isAbsolutePath,
  convertAbsolutePath,
  isMarkdown,
};
