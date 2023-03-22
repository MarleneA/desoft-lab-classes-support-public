import { determineClassPerformance } from "../Exercise2.13";

describe('Testing ', () => {
    test('Given ', () => {

        //Arrange
        let approved: number = -5;
        let expectededResult: string = "Invalid value";

        //Act
        let functionResult = determineClassPerformance(approved);

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