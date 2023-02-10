/* eslint-disable no-undef */
const {
  pathExists,
  isAbsolutePath,
  convertAbsolutePath,
  // isItFile,
  isMarkdown,
  // readFile,
  // findLinks,
  // linkValidation,
} = require('../Api');

// test Test la ruta existe
describe('pathExists', () => {
  it('deberia ser una funcion', () => {
    expect(typeof pathExists).toBe('function');
  });
  it('debe retornar true si existe el archivo', () => {
    pathExists('./package.json');
    expect(pathExists('./package.json')).toEqual(true);
  });
  it('debe retornar false si no existe el archivo', () => {
    pathExists('./fakefile.json');
    expect(pathExists('./fakefile.json')).toEqual(false);
  });
});

// Test a identificar si es ruta absoluta
describe('isAbsolutePath', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
});

// Test covert ruta relativo a absoluto
describe('convertAbsolutePath', () => {
  it('deberia ser una funcion', () => {
    expect(typeof convertAbsolutePath).toBe('function');
  });
  it('debe cambiar la ruta a absoluta si es relativa', () => {
    convertAbsolutePath('./README.md');
    expect(convertAbsolutePath('./README.md')).toEqual(`${tryPathAbsolute}/README.md`);
  });
  it('debe devolver la ruta si ya es absoluta', () => {
    convertAbsolutePath(`${tryPathAbsolute}/README.md`);
    expect(convertAbsolutePath(`${tryPathAbsolute}/README.md`)).toEqual(`${tryPathAbsolute}/README.md`);
  });
});

// Test de es archivo md.
describe('isMarkdown', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isMarkdown).toBe('function');
  });
});

// test
describe('isMarkdown', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isMarkdown).toBe('function');
  });
});
