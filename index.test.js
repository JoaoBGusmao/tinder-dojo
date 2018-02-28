const tinderApp = require('./index');

describe('Tinder Program', () => {
  test('mockFunction should return its param', () => {
    const param = "Parâmetro";
    expect(tinderApp.mockFunction(param)).toBe(param);
  });
});