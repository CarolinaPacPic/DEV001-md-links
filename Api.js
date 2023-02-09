const fs = require('fs');
const path = require('path');
// const axios = require('axios');

// Funcion saber si existe una ruta
const pathExists = (inputPath) => fs.existsSync(inputPath);

// Funcion identificar una ruta absoluta
const isAbsolutePath = (inputPath) => path.isAbsolute(inputPath);
// prueba
// console.log(isAbsolutePath('/MD LINKS/DEV001-md-links/README.md'));

// Funcion convertir a absoluta
const convertAbsolutePath = (inputPath) => (isAbsolutePath(inputPath) ? inputPath
  : path.resolve(inputPath));
  // prueba
// console.log(convertAbsolutePath('prueba/pruebita.md'));

// Identificar si es un archivo (solo archivo)
const isItFile = (inputPath) => fs.statSync(inputPath).isFile();
// prueba
// console.log(isItFile('README.md'));

// Identificar si tiene formato md.
const isMarkdown = (inputPath) => path.extname(inputPath) === '.md';
// prueba
// console.log(isMarkdown('README.md'));

// Leer cada archivo del arreglo.
// leer el archivo md
const readFile = (inputPath) => fs.readFileSync(inputPath, 'utf8');

const findLinks = (content, inputPath) => {
  const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
  const arrayLinks = [...content.matchAll(regExp)];
  console.log(arrayLinks);
  const arrayObjects = [];
  console.log(arrayObjects);
  for (let i = 0; i < arrayLinks.length; i++) {
    arrayObjects.push({
      href: arrayLinks[i][2],
      text: arrayLinks[i][1],
      file: inputPath,
    });
    // arrayObjects.forEach((linkes) => console.log(linkes));
  }
  return arrayObjects;
};
console.log(findLinks(readFile('README.md'), 'README.md'));

module.exports = {
  pathExists,
  isAbsolutePath,
  convertAbsolutePath,
  isItFile,
  isMarkdown,
  readFile,
  findLinks,
};
