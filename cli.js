// Por ahora no poner mucha logica
// Pero es donde va leer los argumentos de linea de comando
// y pasarlo a MDlinks
const { mdLinks } = require('./index');

mdLinks('README.md')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// '/MD LINKS/DEV001-md-links/package.json'
