/* eslint-disable prefer-promise-reject-errors */
const {
  pathExists,
  convertAbsolutePath,
  isMarkdown,
  findLinks,
  linkValidation,
} = require('./Api');

const mdLinks = (inputPath, options) => new Promise((resolve, reject) => {
  // identifica si la ruta existe.
  if (!pathExists(inputPath)) {
    // si la ruta no existe rechaza la promesa
    reject(new Error('La ruta NO EXISTE'));
  } else {
    // si no existe la ruta, se rechaza la promesa
    console.log('La ruta existe');
    // Convertir a una ruta absoluta
    const pathAbsolute = convertAbsolutePath(inputPath);

    if (!isMarkdown(pathAbsolute)) {
      reject(new Error('El archivo no es de tipo Mark Down'));
    } else {
      console.log('Es un archivo markdown');
      // leer el archivo
      findLinks(pathAbsolute).then((arr) => {
        if (arr.length === '0') {
          reject(new Error('el archivo no contiene links'));
        } else if (options === { validate: false }) {
          resolve(arr);
        } else {
          console.log('el archivo contiene los siguientes links');
          linkValidation(arr).then((response) => {
            resolve(response);
          });
        }
      });
    }
  }
});
module.exports = {
  mdLinks,
};
