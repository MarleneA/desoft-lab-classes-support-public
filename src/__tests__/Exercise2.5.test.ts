import { evenNumber } from "../Exercise2.5";

describe('Testing if a number is even or odd', () => {
    test('Number 4 suggested from a provider should return true. ', () => {
        //Arrange
        let number = 4;
        let expectededResult: boolean= true;

        //Act
        let functionResult = evenNumber(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Number 13 suggested from a provider should return false. ', () => {
        //Arrange
        let number = 13;
        let expectededResult: boolean = false;

        //Act
        let functionResult = evenNumber(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});