import { isAscendingOrder } from "../Exercise2.11";


describe('Testing if a random number with 3 digits already is in sorted way or not', () => {
    test('Given the number 857 should return false', () => {

        //Arrange
        let arrOriginal = 857;
        let expectededResult: boolean = false;

        //Act
        let functionResult = isAscendingOrder(arrOriginal);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the number 123 should return true', () => {

        //Arrange
        let arrOriginal = 123;
        let expectededResult: boolean = true;

        //Act
        let functionResult = isAscendingOrder(arrOriginal);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});