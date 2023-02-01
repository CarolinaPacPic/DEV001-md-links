const { pathExists, isAbsolutePath, isMarkdown } = require('../Api');
// test Test la ruta existe
describe('pathExists', () => {
  it('deberia ser una funcion', () => {
    expect(typeof pathExists).toBe('function');
  });
});

// Test a ruta absoluta
describe('isAbsolutePath', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
  it('Deberia devolver una ruta absoluta', () => {
    expect(isAbsolutePath('C://Users//admin//Desktop//DEV001-md-links//README.md')).toBe('C://Users//admin//Desktop//DEV001-md-links//README.md');
  });
  it('Deberia devolver la misma ruta que ya es absoluta', () => {
    expect(isAbsolutePath('C://Users//admin//Desktop//DEV001-md-links//README.md')).toBe('C://Users//admin//Desktop//DEV001-md-links//README.md');
  });
});

// Test de es archivo md.
describe('isMarkdown', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isMarkdown).toBe('function');
  });
});
