/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Funcion saber si existe una ruta
const pathExists = (inputPath) => fs.existsSync(inputPath);

// Funcion identificar una ruta absoluta
// const isAbsolutePath = (inputPath) => path.isAbsolute(inputPath);
// prueba
// console.log(isAbsolutePath('/MD LINKS/DEV001-md-links/README.md'));

// Funcion convertir a absoluta
const convertAbsolutePath = (inputPath) => (path.isAbsolute(inputPath) ? inputPath
  : path.resolve(inputPath));
  // prueba
// console.log(convertAbsolutePath('prueba/pruebita.md'));

// Identificar si es un archivo (solo archivo)
// const isItFile = (inputPath) => fs.statSync(inputPath).isFile();
// prueba
// console.log(isItFile('README.md'));

// Identificar si tiene formato md.
const isMarkdown = (pathAbsolute) => {
  const filepath = path.extname(pathAbsolute);
  if (filepath === '.md') {
    return true;
  } return false;
};
// prueba
// console.log(isMarkdown('README.md'));

// Leer cada archivo del arreglo.
// leer el archivo md
// eslint-disable-next-line consistent-return
const readFile = (mdPath) => new Promise((resolve, reject) => {
  fs.readFileSync(mdPath, 'utf8', (error, file) => {
    if (error) {
      reject(error);
    } else {
      resolve(file);
    }
  });
});

const findLinks = (mdPath) => new Promise((resolve, reject) => {
  const arrayObjects = [];
  readFile(mdPath)
    .then((file) => {
      const regExp = /\[(.+)\]\((https?:\/\/.+)\)/g;
      let search = regExp.exec(file);
      while (search !== null) {
        arrayObjects.push({
          href: search[2],
          text: search[1],
          file: mdPath,
        });
        search = regExp.exec(file);
      }
      resolve(arrayObjects);
    })
    .catch((error) => reject(error));

  // console.log(arrayObjects);
});
// console.log(findLinks(readFile('README.md'), 'README.md'));

const linkValidation = (urls) => {
  const promises = urls.map((link) => axios.get(link.href)
    .then((response) => ({ ...link, status: response.status, message: 'ok' }))
    .catch((error) => ({ ...link, status: error.response.status, message: 'fail' })));
  return Promise.all(promises);
};
// faltan
// console.log(linkValidation(findLinks(readFile('README.md'), 'README.md')));
// console.log(linkValidation([
//   {
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown',
//     file: '/Users/karlagsanabria/Desktop/Labo/DEV001-md-links/Pruebas/Con-links.md',
//   },
//   {
//     href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: '/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/pruebas/pruebaConLinks.md',
//   },
//   {
//     href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.pg',
//     text: 'md-links',
//     file: '/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/pruebas/pruebaConLinks.md',
//   },
// ]).then((result) => console.log(result)));
module.exports = {
  pathExists,
  convertAbsolutePath,
  isMarkdown,
  readFile,
  findLinks,
  linkValidation,
};
