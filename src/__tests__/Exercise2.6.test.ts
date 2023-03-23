import { determineX } from "../Exercise2.6";


describe('Testing the calculation of X', () => {
    test('Given a  negative number 5 should return -5. ', () => {
        //Arrange
        let number = -5;
        let expectededResult: number = -5;

        //Act
        let functionResult = determineX(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Number 0 should return 0. ', () => {
        //Arrange
        let number = 0;
        let expectededResult: number = 0;

        //Act
        let functionResult = determineX(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given a positive number like 20 should do this calculation (x*2)-(2*x) and return 0. ', () => {
        //Arrange
        let number = 20;
        let expectededResult: number = 0;

        //Act
        let functionResult = determineX(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});