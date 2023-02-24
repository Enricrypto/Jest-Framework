const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

    test("One euro should be 1.2 dollars", function(){
        const dollars = fromEuroToDollar(3.5)
        // if 1 euro is 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
        const expected = 3.5 * 1.2; 
         expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
    }); 
 

    test("One dollar should be 106.58333333333334 yens", function(){
        const yens = fromDollarToYen(1)
        // if 1 euro is 1.2 dollars, then 1 dollar should be ((1 / 1.2) * 127.9) yens
        const expected = (1 / 1.2) * 127.9;   
         expect(fromDollarToYen(1)).toBe(106.58333333333334); 
    }); 

    test("One yen should be 0.006254886630179828 pounds", function(){
        const yens = fromYenToPound(1)
        // if 1 euro is 127.9 yens and 1 euro is 0.8 pounds, then 1 yen should be ((1 / 127.9) * 0.8) pounds
        const expected = (1 / 127.9) * 0.8; 
         expect(fromYenToPound(1)).toBe(0.006254886630179828); 
    }); 


