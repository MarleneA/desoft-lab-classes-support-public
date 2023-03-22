import { findNumberMultiples } from "../Exercise2.10";

describe('Testing if 2 numbers given from a provider are multiples', () => {
    test('Given numbers 15 and 60 should return y is a multiple of x', () => {

        //Arrange
        let x: number = 15;
        let y: number = 60;
        let expectededResult: string = "y is a multiple of x";

        //Act
        let functionResult = findNumberMultiples(x, y);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given numbers 5 and 1 should return x is a multiple of y', () => {

        //Arrange
        let x: number = 5;
        let y: number = 1;
        let expectededResult: string = "x is a multiple of y";

        //Act
        let functionResult = findNumberMultiples(x, y);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given numbers 73 and 7 should return x is neither a multiple nor a divisor of y', () => {

        //Arrange
        let x: number = 73;
        let y: number = 7;
        let expectededResult: string = "x is neither a multiple nor a divisor of y";

        //Act
        let functionResult = findNumberMultiples(x, y);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});