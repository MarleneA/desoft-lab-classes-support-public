import { calculateExpression } from "../Exercise10";

describe('Testing the calculation of an expression', () => {
    test('Given de value 300 to x de result expected should be 89101', () => {

        //Arrange
        let x: number = 300;
        let expectededResult: number = 89101;

        //Act
        let functionResult = calculateExpression(x);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});