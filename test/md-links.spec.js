const { mdLinks } = require('../index.js');

describe('mdLinks', () => {
  it('should...', () => {
    console.log('FIX ME!');
  });

  // it('Deberia devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });

  it('debe rechazar la promesa porque el path no existe', () => {
    return mdLinks('/este/path/noexiste.md').catch((error) => {
      expect(error).toBe('La ruta no existe');
    }) 
  });
});
