const { pathExists, isAbsolutePath, convertAbsolutePath, isMarkdown } = require('../Api');
// test Test la ruta existe
describe('pathExists', () => {
  it('deberia ser una funcion', () => {
    expect(typeof pathExists).toBe('function');
  });
});

// Test a identificar si es ruta absoluta
describe('isAbsolutePath', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
  // it('Deberia devolver una ruta absoluta', () => {
  //   expect(isAbsolutePath('C://Users//caro//Desktop//DEV001-Md-links//README.md'))
  //     .toBe('C://Users//caro//Desktop//DEV001-Md-links//README.md');
  // });
  // it('Deberia devolver la misma ruta que ya es absoluta', () => {
  //   expect(isAbsolutePath('C://Users//caro//Desktop//DEV001-Md-links//README.md'))
  //     .toBe('C://Users//caro//Desktop//DEV001-Md-links//README.md');
  // });
});

// Test covert ruta relativo a absoluto
describe('convertAbsolutePath', () => {
  it('deberia ser una funcion', () => {
    expect(typeof convertAbsolutePath).toBe('function');
  });
});

// Test de es archivo md.
describe('isMarkdown', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isMarkdown).toBe('function');
  });
});
