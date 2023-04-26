const sum = require('../utils/suma')


test("sumar 1+2 igual a 3", () => {
  expect(sum(1,2)).toBe(3)

})

test("sumar 3+4 igual a 7", () => {
    expect(sum(3,4)).toBe(7)
  
 
})


describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${3}       | ${1}        | ${4}
      ${-4}      | ${1}        | ${-3}
      ${3}       | ${0}        | ${3}
      ${-3}      | ${1}        | ${-2}

    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });


  
