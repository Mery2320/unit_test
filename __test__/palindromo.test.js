const palindromo = require('../utils/palindromo.js')

test ('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')
})

    test ('palindromo de angela', () => {
        const result = palindromo('angela')
        expect(result).toBe('alegna')
})



    describe('palindromo', () => {   
        test.each`
          string        | expectedResult    
          ${'maria'}    | ${'airam'}
          ${'celia'}    | ${'ailec'}
          
    
    `('$(string) should return $expectedResult', ({string, expectedResult}) => {
    expect(palindromo(string)).toBe(expectedResult);
     });
})