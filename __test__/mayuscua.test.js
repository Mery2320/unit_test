const isUpperCase = require('../utils/mayuscula');

test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})

test('The string ESTUDIA should return true', () => {
    const result = isUpperCase('ESTUDIA');
    expect(result).toBe(true);
})

describe('mayusculas', () => {
  test.each`
    sentence      | expectedResult    
    ${'MARIA'}      | ${true}
    ${'Maria'}      | ${false}
    ${'maria'}      | ${false}
  `('$sentence should return $expectedResult', ({sentence, expectedResult}) => {
    expect(isUpperCase(sentence)).toBe(expectedResult);
  });
});


