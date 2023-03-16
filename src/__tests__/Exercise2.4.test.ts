import { divisionOperator } from "../Exercise2.4";

describe('Testing the division operator', () => {
    test('input of number 500 should return 5', () => {

        //Arrange
        let num: number = 500;
        let expectededResult: number = 5;

        //Act
        let functionResult = divisionOperator(num);

        //Assert
        expect(functionResult).toBe(expectededResult);
    
    });


    test('When number provided is below 100 should return -1', () => {
        //Arrange
        let num: number = 20;
        let expectededResult: number = -1;

        //Act
        let functionResult = divisionOperator(num);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });


    test('When number provided is above 999 should return -1', () => {
        //Arrange
        let num: number = 2500;
        let expectededResult: number = -1;

        //Act
        let functionResult = divisionOperator(num);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});
