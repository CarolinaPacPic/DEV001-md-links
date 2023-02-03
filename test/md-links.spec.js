const { mdLinks } = require('../index');
// primer test
describe('mdLinks', () => {
  it('Debe ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  // it('Deberia devolver una promesa', () => mdLinks().then(() => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // }).catch(() => {}));

  // it('Debe resolver cuando el path existe', () => {
  //   const path = './README.md';
  //   return mdLinks(path).then((route) => {
  //     expect(route).resolves(path);
  //   }).catch(() => {});
  // });

  // it('debe rechazar la promesa porque el path no existe',
  // () => mdLinks('/este/path/noexiste.md').catch((error) => {
  //   expect(error).toBe('La ruta no existe');
  // }));
  // it('should...', () => {
  //   console.log('FIX ME!');
  // });

  // it('Deberia devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
});
