const fs = require('fs');
const path = require('path');
// Funcion saber si existe una ruta
const pathExists = (path) => fs.existsSync(path);
// Funcion identificar una ruta absoluta
const isAbsolutePath = (inputPath) => (
  path.isAbsolute(inputPath) ? inputPath : path.resolve(inputPath));
// Funcion absoluta
// const Absolute = (inputPath) => path.resolve(inputPath);
// Identificar si es un archivo o directorio.

// Identificar si tiene formato md.
const isMarkdown = (inputPath) => path.extname(inputPath) === '.md';
// Leer cada archivo del arreglo.

module.exports = {
  pathExists,
  isAbsolutePath,
  isMarkdown,
};
