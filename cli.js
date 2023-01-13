// Por ahora no poner mucha logica
// Pero es donde va leer los argumentos de linea de comando
// y pasarlo a MDlinks
const { mdLinks } = require('./index.js');

mdLinks('/noexisto/').then(() => {})
  .catch((error) => {
    console.log(error)
  });
